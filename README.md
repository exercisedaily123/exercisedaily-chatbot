# ExerciseDaily Chatbot

This is a multilingual Node.js chatbot project designed for ExerciseDaily.com.

## Features

- Supports multiple languages (extendable)
- Trained on Exercise Daily services: Membership, Scholarship, Media Lab, and more
- Ready to deploy on AWS or VPS

## Setup

1. Install dependencies:
    ```
    npm install
    ```

2. Add your OpenAI API key in `.env`:
    ```
    OPENAI_API_KEY=your_key_here
    ```

3. Run the bot:
    ```
    node server.js
    ```

4. Test locally:
    ```
    curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"message": "What is the membership?"}'
    ```

## License

MIT