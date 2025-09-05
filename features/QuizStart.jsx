import React from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from './quiz/quizSlice';

const QuizStart = () => {
    const dispatch = useDispatch();

    const handleStart = () => {
        dispatch(startQuiz());
    };

    return (
        < div className = "quiz-start" >
            <h2>Welcome to Quiz !</h2>
            <p>Click the button to begin !</p>
            <button onClick={handleStart}>Start Quiz</button>
        </div >
    );
};
export default QuizStart;
