require("dotenv").config()
const { OpenAI } = require("openai");
const {gemeniPrompContent} = require('../setup/promptContents')
const { GoogleGenerativeAI } = require("@google/generative-ai");
var express = require('express');
var router = express.Router();


router.post('/chat', async function(req, res, next) {
    const {problem,errorFaced} = req.body

    try{
        

        // Access your API key as an environment variable (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(process.env.GEMENI_API_KEY);
        
        // ...
        
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        
        async function run(prompt) {
            
          
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            
            return text
          }
          
        const result = await run(problem);
        res.send(result)
    }catch(e){
        res.send({status:"failure",message:"an error occurred."})
    }
})

module.exports = router;