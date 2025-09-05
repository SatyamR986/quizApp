import React from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../features/components/MainLayout';
import Header from '../features/components/Header';
import QuizStart from '../features/QuizStart';
import QuestionCard from '../features/QuestionCard';
import QuizSummary from '../features/QuizSummary';

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
