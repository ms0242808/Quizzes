import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Volume2 } from 'lucide-react';

const Question = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => navigate(`/intro`);

  return (
    <div className='relative w-full h-screen bg-purple-900 flex flex-col items-center justify-center overflow-hidden p-6'>
      {/* Background blur effects */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-0 left-0 w-1/2 h-1/2 bg-purple-700 rounded-full opacity-30 blur-3xl transform -translate-x-1/4 -translate-y-1/4'></div>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-30 blur-3xl transform translate-x-1/4 translate-y-1/4'></div>
      </div>

      {/* Content container */}
      <div className='relative z-10 w-full max-w-md text-center'>
        {/* Greeting and question */}
        <h1 className='text-white text-2xl font-bold mb-4'>身體的主人你好！</h1>
        <p className='text-white text-lg mb-8'>請問怎麼稱呼你？</p>

        {/* Name input */}
        <div className='mb-8'>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='輸入姓名'
            className='w-full bg-transparent border-b-2 border-white text-white text-center text-lg focus:outline-none focus:border-blue-300 pb-2'
          />
        </div>

        {/* Audio hint */}
        <div className='flex items-center justify-center text-white mb-8'>
          {/* <Volume2 size={24} className="mr-2" /> */}
          <span className='text-sm'>點擊右上角符號即可開啟聲音</span>
        </div>

        {/* Next button */}
        <button
          className='bg-white text-purple-900 w-full py-3 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors'
          onClick={handleNextClick}>
          下一步
        </button>
      </div>
    </div>
  );
};

export default Question;
