require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const port = 3080;
//please add cors to express
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-RdU7urV22eZNYaup9sQERQO4",
    apiKey:'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'
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();



//create a simple express api that calls the function from above

app.post('/', async (req, res) => {
    const{message} = req.body;
    console.log(message);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0.5,
    });
    console.log(response.data.choices[0].text);
    res.json({
        message: response.data
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}   );