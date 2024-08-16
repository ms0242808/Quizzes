import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Question from './pages/question';
import Intro from './pages/intro';
import Quiz from './pages/quiz';
import Result from './pages/result';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/quizzes' element={<Question />} />
    <Route path='/intro' element={<Intro />} />
    <Route path='/quiz' element={<Quiz />} />
    <Route path='/result' element={<Result />} />
  </Routes>
);

export default AppRoutes;
