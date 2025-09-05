import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from './quiz/quizSlice';

const QuestionCard = () => {
    const dispatch = useDispatch();

    // get quiz state from Redux
    const {
        questions,
        currentQuestionIndex,
    } = useSelector((state) => state.quiz);
    
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (option) => {
        dispatch(answerQuestion(option));
    };

    return(
        <div className="question-card">
            <h3>Question {currentQuestionIndex + 1}</h3>
            <p>{currentQuestion.question}</p>

            <div className="options">
                {currentQuestion.options.map((option, index) => (
                    <button key={index}
                    onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
            ))}
            </div>
        </div>
    );
}
export default QuestionCard;