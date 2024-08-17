import React from 'react';
import { Route, Routes } from 'react-router-dom';
import quizJson from './/assests/questions/quizzes.json';
import Landing from './pages/landing';
import Question from './pages/question';
import Intro from './pages/intro';
import Quiz from './pages/quiz';
import Result from './pages/result';

const AppRoutes = () => (
	<Routes>
		<Route path='/' element={<Landing title={quizJson.title} description={quizJson.instructions} />} />
		<Route path='/quizzes' element={<Question />} />
		<Route path='/intro' element={<Intro />} />
		<Route path='/quiz' element={<Quiz questions={quizJson.questions} />} />
		<Route path='/result' element={<Result result={quizJson.results} />} />
	</Routes>
);

export default AppRoutes;
