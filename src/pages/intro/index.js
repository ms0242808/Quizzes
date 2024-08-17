import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import introImg from '../../assests/images/intro2.jpg';

const Intro = () => {
	const userName = useSelector((state) => state.userVal.username);
	const navigate = useNavigate();

	const handleQuizClick = () => navigate(`/quiz`);

	return (
		<div
			style={{ backgroundImage: `url(${introImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
			className='relative w-full h-screen flex flex-col items-center justify-center overflow-hidden p-6'
		>
			{/* <div className='relative w-full h-screen bg-purple-900 flex flex-col items-center justify-center overflow-hidden p-6'> */}
			<div className='absolute top-0 left-0 w-full h-full'>
				<div className='absolute top-0 left-0 w-1/2 h-1/2 bg-purple-700 rounded-full opacity-30 blur-3xl transform -translate-x-1/4 -translate-y-1/4'></div>
				<div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-30 blur-3xl transform translate-x-1/4 translate-y-1/4'></div>
			</div>

			<div className='relative z-10 w-full max-w-md text-center text-white'>
				<h1 className='text-3xl font-bold mb-6'>Hey, {userName}</h1>
				<p className='text-xl mb-8'>
					This test invites you to reflect on your preferences, behaviors, and responses to various situations.
				</p>
				<p className='text-xl mb-8'>
					By answering a series of fun and engaging questions, you'll discover which type of fish best represents your
					character.
				</p>
				<button
					className='bg-white text-purple-900 rounded-full p-4 flex items-center justify-center mx-auto hover:bg-gray-200 transition-colors'
					onClick={handleQuizClick}
				>
					<span className='text-xl font-bold text-sky-950'>Let's swim</span>
				</button>
			</div>
			{/* <div className='absolute bottom-0 w-full flex justify-center'>
				<img src={introImg} alt='Characters' className='max-w-full h-auto' />
			</div> */}
		</div>
	);
};

export default Intro;
