import React, { useState } from "react";
import "./Main.css";

export default function Main() {
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getFortune = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "user",
                content: `You are a fortune teller. Respond to the following question: ${question}`,
              },
            ],
            max_tokens: 60,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const fullText = data.choices[0].message.content.trim();
      console.log(fullText);
      typeText(fullText);
    } catch (error) {
      console.error("Error fetching fortune:", error);
      setResponse("An error occurred. Please try again.");
    }
  };

  const typeText = (text) => {
    setIsTyping(true);
    let index = 0;
    setResponse("");
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setResponse((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Adjust the delay for typing speed
  };

  return (
    <div className="main">
      <div className="title">
        <h2>Prophecy Portal: Glimpse the Unknown</h2>
      </div>
      <div className="response">
        {isTyping ? <span>{response}</span> : <span>{response}</span>}
      </div>
      <div className="form">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="submit">
          <button type="button" name="submit" onClick={getFortune}>
            Unveil
          </button>
        </div>
      </div>
    </div>
  );
}
