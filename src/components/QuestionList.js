import React, { useCallback, useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDelete = (questionSelected) => {
    setQuestion((questions) =>
      questions.filter((question) => question.id !== questionSelected.id)
    );
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      {question.map((question) => (
        <QuestionItem
          question={question}
          key={question.id}
          prompt={question.prompt}
          answers={question.answers}
          correctIndex={question.correctIndex}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default QuestionList;
