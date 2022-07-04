import React, { useState } from 'react';
import MoreOptions from '../assets/svgs/more-vertical.svg';
import Menu from './Menu';

const ProgressHeader = ({ data }) => {
  const [active, setMenuActive] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        {/* Card header including title and status */}
        <div className="flex gap-x-[15px]">
          <h4 className="text-[20px] font-semibold">{data?.title || ''}</h4>
          {/* progress status */}
          <div
            className={`
                    ${data?.status === 'Resolved' && 'bg-[#C0FFC7]'}
                    ${data?.status === 'In Progress' && 'bg-[#FBF8B2]'}
        
        px-[6px]
        py-[5px]
        rounded-[5px]
        `}
          >
            <p
              className={`
        ${data?.status === 'Resolved' && 'text-resolved'}
        ${data?.status === 'In Progress' && 'text-[#FFA800]'}`}
            >
              {data?.status}
            </p>
          </div>
        </div>
        {/* More Options Point */}
        <div
          onClick={() => {
            setMenuActive((prev) => !prev);
          }}
          className="bg-gray1 
                    flex
                    cursor-pointer
                    justify-center items-center w-[33px] h-[33px] rounded-[50%]"
        >
          {/* More Options Svg */}
          <img src={MoreOptions} alt={'More Options'} />
        </div>
      </div>
      {/* Menu Modal */}
      {active && <Menu setActive={setMenuActive} idNumber={data?.id} />}
    </>
  );
};

export default ProgressHeader;
