import React from 'react';
// import { Radar } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Result = () => {
  const radarData = [
    { subject: '活力', A: 120, fullMark: 150 },
    { subject: '樂觀', A: 98, fullMark: 150 },
    { subject: '創意', A: 86, fullMark: 150 },
    { subject: '同理心', A: 99, fullMark: 150 },
    { subject: '領導', A: 85, fullMark: 150 },
  ];

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100 p-4 flex flex-col items-center'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6'>
        <h1 className='text-3xl font-bold text-center mb-4'>Y的情緒主角是</h1>
        <h2 className='text-5xl font-bold text-center text-yellow-500 mb-6'>樂樂</h2>

        <div className='flex justify-center mb-6'>
          <img src='/api/placeholder/150/250' alt='Joy character' className='h-64' />
        </div>

        <div className='grid grid-cols-2 gap-2 mb-6'>
          {['活力充沛', '感染力', '好了啦', '我好興奮皇冠', '我最壞跩又', '愛哭鬼', '我只想開心', '觀眾小姐'].map(
            (trait, index) => (
              <div key={index} className='bg-yellow-100 rounded-full px-3 py-1 text-sm text-center'>
                {trait}
              </div>
            )
          )}
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2'>情緒分析</h3>
          {/* <Radar
            width={300}
            height={300}
            data={radarData}
            className="mx-auto"
          >
            Radar chart configuration would go here
          </Radar> */}
          <ResponsiveContainer width='100%' height={300}>
            <RadarChart cx='50%' cy='50%' outerRadius='80%' data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey='subject' />
              <PolarRadiusAxis />
              <Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2'>綜合指數</h3>
          <div className='text-4xl font-bold text-center text-yellow-500'>120%</div>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-2'>互相影響</h3>
          <div className='flex justify-around'>
            {['恐懼', '厭惡', '憤怒', '憂傷'].map((emotion, index) => (
              <div key={index} className='text-center'>
                <div className='w-12 h-12 rounded-full bg-gray-300 mb-1'></div>
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
