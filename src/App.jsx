import React from 'react';
import { useSelector } from 'react-redux';

import MainLayout from './components/MainLayout';
import Header from './components/Header';
import QuizStart from './components/QuizStart';
import QuestionCard from './components/QuestionCard';
import QuizSummary from './components/QuizSummary';

const App = () => {
  const { quizStarted, quizEnded } = useSelector((state) => state.quiz);

  return (
    <MainLayout>

      <Header />

      {!quizStarted && <QuizStart />}
      {quizStarted && !quizEnded && <QuestionCard />}
      {quizEnded && <QuizSummary />}
      
    </MainLayout>
  );
};

export default App;
