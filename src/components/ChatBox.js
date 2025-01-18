import React, { useState } from "react";
import QuestionBank from "./QuestionBank";

const ChatBox = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleSend = () => {
        if (!userInput.trim()) return;

        setResponses([
            ...responses,
            { question: QuestionBank[currentQuestionIndex], answer: userInput }
        ]);

        setUserInput("");
        if (currentQuestionIndex < QuestionBank.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className="chatbox">
            <h2>AI Interviewer</h2>
            <div className="chat-area">
                {responses.map((resp, index) => (
                    <div key={index} className="chat">
                        <p><strong>AI:</strong> {resp.question}</p>
                        <p><strong>You:</strong> {resp.answer}</p>
                    </div>
                ))}
                {currentQuestionIndex < QuestionBank.length && (
                    <p><strong>AI:</strong> {QuestionBank[currentQuestionIndex]}</p>
                )}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your answer..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;
