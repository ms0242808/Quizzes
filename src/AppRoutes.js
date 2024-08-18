import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import quizJson from './/assests/questions/quizzes.json';
import Landing from './pages/landing';
import Question from './pages/question';
import Intro from './pages/intro';
import Quiz from './pages/quiz';
import Result from './pages/result';

const PageWrapper = ({ children }) => {
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		setIsVisible(false);
		const timer = setTimeout(() => setIsVisible(true), 600); // Match duration with PageTransition
		return () => clearTimeout(timer);
	}, [location]);

	return <PageTransition isVisible={isVisible}>{children}</PageTransition>;
};

const AppRoutes = () => (
	<PageWrapper>
		<Routes>
			<Route path='/' element={<Landing title={quizJson.title} description={quizJson.instructions} />} />
			<Route path='/quizzes' element={<Question />} />
			<Route path='/intro' element={<Intro />} />
			<Route path='/quiz' element={<Quiz questions={quizJson.questions} />} />
			<Route path='/result' element={<Result result={quizJson.results} />} />
		</Routes>
	</PageWrapper>
);

export default AppRoutes;
