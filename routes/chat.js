const express = require('express');
const router = express.Router();
const axios = require('axios');
const detectLanguage = require('../utils/languageDetector');
const trainingData = require('../data/intents/en.json');

router.post('/', async (req, res) => {
    const userInput = req.body.message || '';
    const lang = detectLanguage(userInput);

    const matchedIntent = trainingData.find(item =>
        item.examples.some(example => userInput.toLowerCase().includes(example.toLowerCase()))
    );

    const prompt = matchedIntent ? matchedIntent.responses[0] : "I'm here to help! Can you please clarify your question?";

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const reply = response.data.choices[0].message.content;
        res.json({ reply });
    } catch (err) {
        res.status(500).json({ error: 'OpenAI API error', details: err.message });
    }
});

module.exports = router;