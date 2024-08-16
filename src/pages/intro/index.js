import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Film } from 'lucide-react';

const Intro = ({ name = 'Noah' }) => {
  const navigate = useNavigate();

  const handleQuizClick = () => navigate(`/quiz`);

  return (
    <div className='relative w-full h-screen bg-purple-900 flex flex-col items-center justify-center overflow-hidden p-6'>
      {/* Background blur effects */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-0 left-0 w-1/2 h-1/2 bg-purple-700 rounded-full opacity-30 blur-3xl transform -translate-x-1/4 -translate-y-1/4'></div>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-30 blur-3xl transform translate-x-1/4 translate-y-1/4'></div>
      </div>

      {/* Content container */}
      <div className='relative z-10 w-full max-w-md text-center text-white'>
        <h1 className='text-3xl font-bold mb-6'>嘿，{name}</h1>
        <p className='text-xl mb-8'>歡迎進入 emo 小劇場</p>

        <p className='text-lg mb-2'>情緒們正在你的大腦控制台</p>
        <p className='text-lg mb-2'>不斷乒乓乒乓</p>
        <p className='text-lg mb-8'>忙著爭奪主角的位置</p>

        <p className='text-xl mb-8'>究竟誰會成為你的情緒主角呢？</p>
        <p className='text-2xl font-bold mb-12'>好戲登場！</p>

        {/* Action button */}
        <button
          className='bg-white text-purple-900 rounded-full p-4 flex items-center justify-center mx-auto hover:bg-gray-200 transition-colors'
          onClick={handleQuizClick}>
          {/* <Film size={24} className="mr-2" /> */}
          <span className='text-xl font-bold'>ACTION</span>
        </button>
      </div>
    </div>
  );
};

export default Intro;
