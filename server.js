require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const chatRoute = require('./routes/chat');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/chat', chatRoute);

app.listen(port, () => {
    console.log(`Exercise Daily Chatbot running on port ${port}`);
});