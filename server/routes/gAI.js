require("dotenv").config()
const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
var express = require('express');
var router = express.Router();

function formatPrompt(obj){
    let errorString = ''
    if(obj.errorFaced){
        errorString = `You should consider this error that was shown to the user:${obj.errorFaced}.`
    }
    return `Please break this problem of ${obj.problem} into smaller sub-problems and categorise the subproblems into technical or conceptual problems.
    For technical problems, suggest the best possible solution to the technical problem and provide valid resources to help solve the technical problem.
    This could be the relevant documentations or posts from forums like Stackoverflow. Ensure that the links are valid.`+
    errorString +`

    For conceptual problems, list out the relevant concepts and explain them in a simple manner on the assumption that the user
    is a beginner student with little experience in the field. List out the relevant resources to help better explain these concepts.
    Ensure that the links are valid.

    For problems where the user is seeking advice, provide them with the appropriate advice and include a list of links to resources
    to help them. These resources could be blog posts, links to youtube videos on the relevant advice. It is also important to highlight
    to them the process. For example, you should explain the software development lifecycle process first to someone who is asking what is the best
    way to learn software engineering. Focus on the process, then the technical areas such as a tools and languages required.

    Produce your answers in spanish. For headers, start with <header> and end with </header>. For Subheaders, start with <subheader> and end with </subheader>.For texts, start with <text> and end with </text>. For code, start them with <code> and end them with </code>.
    As much as possible, leave your responses in point form. Use "\n" once to indicate next line. Between each subproblem, use <break/> to separate the subproblems.
    `
}

router.post('/chat', async function(req, res, next) {
    const {problem,errorFaced} = req.body

    try{
        

        // Access your API key as an environment variable (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(process.env.GEMENI_API_KEY);
        
        // ...
        
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        
        async function run(prompt) {
            
            let formattedPrompt = formatPrompt(prompt)
            const result = await model.generateContent(formattedPrompt);
            const response = await result.response;
            const text = response.text();
            
            return text
          }
        var result = await run(req.body);
        

        
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
              });
              async function runCompletion (obj,resp) {
                const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-0125",
                messages:[{"role": "user","content":`The user has a problem/question of ${obj.problem}.`+(obj.errorFaced && `The user had the error ${obj.errorFaced}.`)
                +`Verify that the following response is accurate and appropriate: "+${resp}. If it is not, say 'No' otherwise write a 1000 character summary of the response and if it is appropriate, you do not need to mention that it is appropriate, just provide the summary. Provide your summary in spanish. Escribe en espanol.`}],
                max_tokens:2000
                });
                
                return completion.choices[0].message.content
            }

        var fresult = await runCompletion(req.body,result);
        if(fresult.trim().toLowerCase()=='no'){
            result = await run(req.body);
            fresult = await runCompletion(req.body,result);
        }

        const finalObj = {
            summary:fresult,
            content:result
        }

        res.send(finalObj)
    }catch(e){
        res.send({status:"failure",message:"an error occurred."})
    }
})

module.exports = router;