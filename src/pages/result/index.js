import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import salomnImg from '../../assests/images/salmon.jpeg';
import goldfishImg from '../../assests/images/Goldfish.jpeg';
import clownfishImg from '../../assests/images/Clownfish.jpg';
import sharkImg from '../../assests/images/Shark.jpeg';
import { ResultIcon1, ResultIcon2, ResultIcon3, ResultIcon4 } from '../../components/icons';

const Result = ({ result }) => {
	const { username, answers } = useSelector((state) => state.userVal);
	const [outcome, updateOutcome] = useState([]);
	const [loading, updateLoading] = useState(true);
	const resutImg = [salomnImg, goldfishImg, clownfishImg, sharkImg];
	const resultIcon = [<ResultIcon1 />, <ResultIcon2 />, <ResultIcon3 />, <ResultIcon4 />];

	const findResult = () => {
		const frequency = {};
		answers.forEach((answer) => {
			frequency[answer] = (frequency[answer] || 0) + 1;
		});

		let mostFrequentAnswer = null;
		let maxCount = 0;

		for (const [answer, count] of Object.entries(frequency)) {
			if (count > maxCount) {
				mostFrequentAnswer = answer;
				maxCount = count;
			}
		}
		updateOutcome(result[mostFrequentAnswer]);
		updateLoading(false);
	};

	useEffect(() => {
		findResult();
	});

	return loading ? null : (
		<div
			style={{ background: `linear-gradient(to bottom, ${outcome.bgColor}, #FFF)` }}
			className={`w-full min-h-screen bg-gradient-to-b  p-4 flex flex-col items-center`}
		>
			<div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6'>
				<h1 className='text-3xl font-bold text-center mb-4'>{username}'s emotional character</h1>
				<h2 className='text-5xl font-bold text-center mb-6' style={{ color: outcome.bgColor }}>
					{outcome.name}
				</h2>

				<div className='flex justify-center mb-6'>
					<img src={resutImg[outcome.index]} alt={outcome.name} className='h-64' />
				</div>

				<div className='grid grid-cols-2 gap-2 mb-6'>
					{outcome.tags.map((trait, index) => (
						<div
							key={index}
							className='rounded-full px-3 py-1 text-sm text-center text-white font-bold'
							style={{ backgroundColor: outcome.tagColor }}
						>
							{trait}
						</div>
					))}
				</div>

				<div className='mb-6'>
					<h3 className='text-lg font-bold mb-2'>Emotional analysis</h3>
					<ResponsiveContainer width='100%' height={300}>
						<RadarChart cx='50%' cy='50%' outerRadius='80%' data={outcome.radarData}>
							<PolarGrid />
							<PolarAngleAxis dataKey='subject' />
							<PolarRadiusAxis />
							<Radar
								name='Analysis'
								dataKey='Score'
								stroke={outcome.tagColor}
								fill={outcome.tagColor}
								fillOpacity={0.6}
							/>
						</RadarChart>
					</ResponsiveContainer>
				</div>

				<div className='mb-6'>
					<h3 className='text-lg font-bold mb-2'>Comprehensive Index</h3>
					<div className='text-4xl font-bold text-center' style={{ color: outcome.bgColor }}>
						{outcome.finalScore}
					</div>
				</div>

				<div>
					<h3 className='text-lg font-bold mb-2'>Mutual Influence</h3>
					<div className='flex justify-around items-center'>
						{outcome.mutual_influence.map((emotion, index) => (
							<div key={index} className='text-center flex flex-col items-center'>
								<div className='w-12 h-12 rounded-full bg-gray-300 mb-1'>{resultIcon[index]}</div>
								<div className='text-sm'>{emotion}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='mt-4 text-sm text-gray-600'>Promotion text</div>
		</div>
	);
};

export default Result;
