# OpenAI Chat Completion in n8n

**Use case:** Generate a response using GPT-4

**Steps:**
1. Use OpenAI node
2. Set operation to "Chat"
3. Provide a system message and a user message
4. Limit max tokens and temperature

**Example Prompt:**
- System: "You are a helpful assistant."
- User: "Summarize this article for a business owner."

**Pro Tip:** Use a Set node before the OpenAI node to format dynamic input.