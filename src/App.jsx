import React, { useState } from "react";

function App() {
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Syntax",
      ],
      correct: "Cascading Style Sheets",
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correct: "1995",
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "IBM"],
      correct: "Netscape",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks Text Mark Language",
        "Hyper Tool Multi Language",
      ],
      correct: "Hyper Text Markup Language",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = quizData[currentIndex];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setIsCorrect(option === currentQuestion.correct);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setSelectedAnswer("");
    setIsCorrect(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Q{currentIndex + 1}. {currentQuestion.question}
      </h2>

      {currentQuestion.options.map((option, i) => {
        const isSelected = selectedAnswer === option;

        return (
          <button
            key={i}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== ""}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "250px",
              backgroundColor:
                isSelected && isCorrect
                  ? "lightgreen"
                  : isSelected && !isCorrect
                  ? "salmon"
                  : "",
              border: "1px solid #333",
            }}
          >
            {option}
          </button>
        );
      })}

      {selectedAnswer && (
        <h3 style={{ marginTop: "20px" }}>
          {isCorrect ? "✅ Correct!" : "❌ Wrong!"}
        </h3>
      )}

      {selectedAnswer && currentIndex < quizData.length - 1 && (
        <button
          onClick={handleNext}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Next Question →
        </button>
      )}

      {selectedAnswer && currentIndex === quizData.length - 1 && (
        <h2>🎉 Quiz Completed!</h2>
      )}
    </div>
  );
}

export default App;
