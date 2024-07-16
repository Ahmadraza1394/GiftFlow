import React, { useEffect, useState } from 'react';

const QAList = ({ questions, updateAnswer, childName }) => {
  const [tempAnswers, setTempAnswers] = useState(() => {
    // تحميل الإجابات المخزنة في localStorage إذا وُجدت
    const savedAnswers = localStorage.getItem(childName + 'Answers');
    return savedAnswers ? JSON.parse(savedAnswers) : questions.reduce((acc, question) => {
      acc[question.question] = question.answer || '';
      return acc;
    }, {});
  });

  // استخدام useEffect لتحديث localStorage فقط عند تغيير الإجابات المؤقتة
  useEffect(() => {
    localStorage.setItem(childName + 'Answers', JSON.stringify(tempAnswers));
  }, [tempAnswers, childName]);

  const handleAnswerChange = (question, newAnswer) => {
    setTempAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: newAnswer
    }));
  };

  const submitAnswer = (question) => {
    updateAnswer(childName, question, tempAnswers[question]);
  };

  return (
    <div>
      <h2>Questions and Answers for {childName}</h2>
      <ul className="list-group">
        {questions.map((qa, index) => (
          <li key={index} className="list-group-item">
            <strong>{qa.question}</strong>
            <input 
              type="text" 
              className="form-control mt-2" 
              value={tempAnswers[qa.question] || ''} 
              onChange={(e) => handleAnswerChange(qa.question, e.target.value)} 
            />
            <button 
              className="btn btn-primary mt-2"
              onClick={() => submitAnswer(qa.question)}
            >
              Submit Answer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAList;
