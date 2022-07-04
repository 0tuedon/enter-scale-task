import React from 'react';

const ProgressBody = ({ data }) => {
  return (
    <div
      className="
    h-[60%]
    text-[rgba(0,0,0,0.7)]"
    >
      <p>{data?.description}</p>
    </div>
  );
};

export default ProgressBody;
