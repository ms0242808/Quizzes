import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Camera } from 'lucide-react';
import { Bolt } from '../../components/icons/index';

const Landing = () => {
  const navigate = useNavigate();

  const handleQuizClick = () => navigate(`/quizzes`);

  return (
    <div className='relative w-full h-screen bg-purple-900 flex flex-col items-center justify-center overflow-hidden'>
      {/* Glowing orb background */}
      <div className='absolute w-4/5 h-4/5 bg-blue-500 rounded-full opacity-30 blur-3xl'></div>
      {/* Content container */}
      <div className='relative z-10 w-full max-w-md text-center'>
        {/* Disney Pixar logo */}
        <div className='text-white text-2xl font-bold mb-4'>Title • Title</div>
        {/* Title */}
        <div className='text-white text-5xl font-bold mb-4'>Heading</div>
        {/* Subtitle */}
        <div className='text-white text-xl mb-8'>Descriptions</div>
        {/* Enter button */}
        <button
          className='border-2 w-80 text-white px-8 py-2 rounded-full text-xl hover:bg-blue-600 transition-colors'
          onClick={handleQuizClick}>
          ENTER
        </button>
      </div>
      {/* Characters */}
      <div className='absolute bottom-0 w-full flex justify-center'>
        <img src='/api/placeholder/400/200' alt='Characters image' className='max-w-full h-auto' />
      </div>
      {/* Camera icon */}
      <div className='absolute top-4 right-4 text-white'>
        <Bolt />
      </div>
    </div>
  );
};

export default Landing;
