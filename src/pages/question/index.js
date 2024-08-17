import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateuserName } from '../../redux/quizSlice';
import introImg from '../../assests/images/intro.jpg';

const Question = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleNextClick = () => {
		dispatch(updateuserName(name));
		navigate(`/intro`);
	};

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

			<div className='relative z-10 w-full max-w-md text-center'>
				<h1 className='text-white text-2xl font-bold mb-4'>Welcome to the "Which Fish Are You?"</h1>
				<p className='text-white text-lg mb-8'>
					A playful and insightful way to explore your personality through the lens of the underwater world!
				</p>

				<div className='mb-8'>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Enter your name'
						className='w-full bg-transparent border-b-2 border-white text-white text-center text-lg focus:outline-none focus:border-blue-300 pb-2'
					/>
				</div>

				<button
					className='bg-white text-sky-950 w-full py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors'
					onClick={handleNextClick}
				>
					Next
				</button>
			</div>
			{/* <div className='absolute bottom-0 w-full flex justify-center'>
				<img src={introImg} alt='Characters' className='max-w-full h-auto' />
			</div> */}
		</div>
	);
};

export default Question;
