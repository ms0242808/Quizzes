import React from 'react';
import { useNavigate } from 'react-router-dom';
import landingImg from '../../assests/images/landing.jpg';

const Landing = ({ title, description }) => {
	const navigate = useNavigate();

	const handleQuizClick = () => navigate(`/quizzes`);

	return (
		<div className='relative w-full h-screen bg-purple-900 flex flex-col items-center justify-center overflow-hidden'>
			<div className='absolute w-4/5 h-4/5 bg-blue-500 rounded-full opacity-30 blur-3xl'></div>
			<div className='relative z-10 w-full max-w-md text-center'>
				<div className='text-white text-2xl font-bold mb-4'>Sea • Life</div>
				<div className='text-white text-5xl font-bold mb-4'>{title}</div>
				<div className='text-white text-xl mb-8'>{description}</div>
				<button
					className='border-2 w-80 text-white px-8 py-2 rounded-full text-xl hover:bg-blue-600 transition-colors'
					onClick={handleQuizClick}
				>
					ENTER
				</button>
			</div>
			<div className='absolute bottom-0 w-full flex justify-center'>
				<img src={landingImg} alt='Characters' className='max-w-full h-auto' />
			</div>
		</div>
	);
};

export default Landing;
