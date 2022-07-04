import React from 'react';
import Clock from '../assets/svgs/clock.svg';

const ProgressFooter = ({ data }) => {
  const date = new Date(data?.date).toLocaleDateString('en-uk', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="flex  mt-[15px] gap-x-[50px]">
      {/* Tag if Urgent or Minor or average */}
      <div
        className={`
        bg-[#FFC0C0] px-[10px] 
        ${data.tag === 'Minor' && 'bg-[#C0F7FF]'}
            ${data.tag === 'Moderate' && ''}
            ${data.tag === 'Urgent' && 'bg-[#FFC0C0]'}
        py-[5px] rounded-[5px]`}
      >
        <p
          className={`
            ${data.tag === 'Minor' && 'text-[#308D9A]'}
            ${data.tag === 'Moderate' && ''}
            ${data.tag === 'Urgent' && 'text-[#FF0000]'}
            text-[#FF0000]`}
        >
          {data?.tag}
        </p>
      </div>
      {/* Date  */}
      <div className="flex items-center gap-x-[10px]">
        <img src={Clock} alt={'Clock'} />
        {/* Date time  */}
        <p className="text-grayOpacity">{date}</p>
      </div>
    </div>
  );
};

export default ProgressFooter;
