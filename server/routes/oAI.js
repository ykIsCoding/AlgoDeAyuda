require("dotenv").config()
const { OpenAI } = require("openai");
const {cGPTPrompContent} = require('../setup/promptContents')
var express = require('express');
var router = express.Router();


router.get('/chat', async function(req, res, next) {

    const problem = req.query
    console.log("req,q",req.query)
    try{
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      async function runCompletion () {
        const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages:[{"role": "user","content":`${cGPTPrompContent}. The following is the user's problem or question:${problem}`}],
        max_tokens:4000
        });
        console.log("req,q",completion.choices[0].message.content)
        //res.send({status:'success',message:completion.choices[0].message.content.split('\n')})
        return
    }
    runCompletion();
    }catch(e){
        res.send({status:"failure",message:"an error occurred."})
    }
})

module.exports = router;