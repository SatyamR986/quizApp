import { createSlice } from '@reduxjs/toolkit';
import { questions } from './questions';

const initialState = {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    quizStarted: false,
    quizEnded: false,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        startQuiz(state) {
            state.quizStarted = true;
            state.quizEnded = false;
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
        answerQuestion(state, action) {
            const selectedOption = action.payload;
            const currentQuestion = state.questions[state.currentQuestionIndex];
            
            // Check if the selected option is correct
            if (selectedOption === currentQuestion.answer) {
                state.score += 1;
            }   
            // Move to next question or end quiz
            if (state.currentQuestionIndex + 1 < state.questions.length){
                state.currentQuestionIndex += 1;
            }
            else {
                state.quizEnded = true;
            }
        },
        restartQuiz(state) {
            state.quizStarted = false;
            state.quizEnded = false;
            state.currentQuestionIndex = 0;
            state.score = 0;
        }
    }
});

export const { startQuiz, answerQuestion, restartQuiz } = quizSlice.actions;
export default quizSlice.reducer;