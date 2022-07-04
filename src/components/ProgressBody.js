import React from 'react';

const ProgressBody = ({ data }) => {
  return (
    <div
      className="
    h-[70%]
    text-[rgba(0,0,0,0.7)]
    overflow-y-scroll scrollbar
    "
    >
      <p className='
      w-[100%]
      max-w-[100%]
    
break-words
      '>
        {data?.description}</p>

    </div>
  );
};

export default ProgressBody;
