import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUseranswers } from '../../util';
import quizzesImg from '../../assests/images/quizzes.jpg';

const MemoryBubble = ({ color, option, text, handleClick }) => (
	<div
		className={`w-36 h-36 rounded-full flex items-center justify-center p-4 text-center text-sm font-bold shadow-lg ${color} transition-transform hover:scale-105 cursor-pointer`}
		onClick={handleClick}
	>
		<div>
			<p>{option}</p>
			<p>{text}</p>
		</div>
	</div>
);

const Quiz = ({ questions }) => {
	const navigate = useNavigate();
	const pagesLength = questions.length - 1;
	const colors = [
		'bg-yellow-300 text-yellow-800',
		'bg-red-400 text-red-900',
		'bg-blue-400 text-blue-900',
		'bg-green-400 text-green-900'
	];
	const [answers, setAnswers] = useState([]);
	const [pages, setPages] = useState(0);

	const handleQuizClick = (val) => {
		setAnswers((prev) => [...prev, val]);

		if (pages === pagesLength) {
			updateUseranswers(answers);
			navigate(`/result`);
		} else {
			setPages((prev) => prev + 1);
		}
	};

	return (
		<div
			style={{ backgroundImage: `url(${quizzesImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
			className='relative w-full h-screen flex flex-col items-center justify-center overflow-hidden p-6'
		>
			<div className='text-white text-center mb-8 mt-4'>
				<p className='text-lg mb-2 font-bold'>{questions[pages].question}</p>
			</div>

			<div className='flex flex-wrap justify-center items-center gap-4 mb-24'>
				{Object.entries(questions[pages].options).map(([key, value], index) => (
					<MemoryBubble color={colors[index]} option={key} text={value} handleClick={() => handleQuizClick(key)} />
				))}
			</div>

			{/* <div className='w-full max-w-md relative'>
				<input
					type='range'
					min='0'
					max={pagesLength}
					value={pages}
					// onChange={(e) => setSliderValue(e.target.value)}
					className='absolute bottom-0 left-0 w-full'
				/>
			</div> */}
		</div>
	);
};

export default Quiz;
