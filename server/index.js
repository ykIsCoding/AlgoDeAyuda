require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const oAiRoutes = require('./routes/oAI')
const gAiRoutes = require('./routes/gAI')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors(corsOptions));
app.use('/oai',oAiRoutes)
app.use('/gai',gAiRoutes)


app.get('/', function (req, res) {
    res.send('Hello World')
  })
  

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS", 
    "Access-Control-Allow-Headers": "*", 
  },
};



app.listen(5000||process.env.PORT)