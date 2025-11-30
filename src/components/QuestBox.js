import React, { useState } from "react";
import "./QuestBox.css";

export default function QuestBox({
  questionText,
  questionJSX,
  question,
  options,
}) {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    if (selected !== null) return; // chỉ chọn 1 lần
    setSelected(index);
  };

  return (
    <div className="quest-box">
      {/* Câu hỏi */}
      <div className="quest-question">
        {questionJSX ? (
          <div className="question-content">{questionJSX}</div>
        ) : questionText ? (
          <strong>{questionText}</strong>
        ) : question ? (
          <strong>{question}</strong>
        ) : null}
      </div>

      {/* Đáp án */}
      <ul className="options">
        {options.map((opt, index) => {
          const isChosen = selected === index;
          const isCorrect = opt.correct;

          let className = "option-item";
          if (selected !== null) {
            if (isChosen && isCorrect) className += " correct";
            else if (isChosen && !isCorrect) className += " wrong";
            else if (!isChosen && isCorrect) className += " correct";
          }

          return (
            <li
              key={index}
              className={className}
              onClick={() => handleClick(index)}
            >
              <div className="option-content">
                {opt.jsx ? opt.jsx : opt.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
