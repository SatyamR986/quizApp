import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { restartQuiz } from './quiz/quizSlice';

const QuizSummary = () => {
    const dispatch = useDispatch();

    const { score , questtions } = useSelector((state) => state.quiz);

    const handleRestart = () => {
        dispatch(restartQuiz());
    };

    return (
        <div className="quiz-summary">
            <h2>Quiz Complete!</h2>
            <p>Your Score: {score} / {questions.length}</p>

            <button onClick={handleRestart}>Restart Quiz</button>
        </div>
    );
};
export default QuizSummary;