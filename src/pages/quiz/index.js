import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

const MemoryBubble = ({ color, text, handleClick }) => (
  <div
    className={`w-32 h-32 rounded-full flex items-center justify-center p-4 text-center text-sm font-bold shadow-lg ${color} transition-transform hover:scale-105 cursor-pointer`}
    onClick={handleClick}>
    <div>
      {/* <MapPin size={16} className="mb-1 mx-auto" /> */}
      {text}
    </div>
  </div>
);

const Quiz = () => {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(50);

  const handleQuizClick = () => navigate(`/result`);

  return (
    <div className='relative w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 flex flex-col items-center justify-between p-6 overflow-hidden'>
      {/* Top text */}
      <div className='text-white text-center mb-8 mt-4'>
        <p className='text-lg mb-2'>一抵達控制台，發現大家正要播放</p>
        <p className='text-lg'>你最棒的某段記憶，你覺得是......</p>
      </div>

      {/* Memory bubbles */}
      <div className='flex flex-wrap justify-center items-center gap-4 mb-24'>
        <MemoryBubble
          color='bg-yellow-300 text-yellow-800'
          text='第一次跟全家人一起吹蠟燭生日蛋糕'
          handleClick={handleQuizClick}
        />
        <MemoryBubble color='bg-red-400 text-red-900' text='第一次交到朋友' handleClick={handleQuizClick} />
        <MemoryBubble color='bg-blue-400 text-blue-900' text='第一次出門旅行' handleClick={handleQuizClick} />
        <MemoryBubble color='bg-green-400 text-green-900' text='第一次比賽獲得勝利' handleClick={handleQuizClick} />
      </div>

      {/* Characters and slider */}
      <div className='w-full max-w-md relative'>
        <img src='/api/placeholder/400/100' alt='Inside Out characters' className='w-full' />
        <input
          type='range'
          min='0'
          max='100'
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
          className='absolute bottom-0 left-0 w-full'
        />
      </div>
    </div>
  );
};

export default Quiz;
