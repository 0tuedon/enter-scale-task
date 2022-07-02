import React from 'react'
import Clock from '../assets/svgs/clock.svg'
const ProgressFooter = () => {
  return (
    <div className='flex mt-[15px] gap-x-[50px]'>
        {/* Tag if Urgent or Minor or average */}
        <div className='bg-[#FFC0C0] px-[10px] 
        py-[5px] rounded-[5px]'>
            <p className='text-[#FF0000]'>Minor</p>
        </div>
        {/* Date  */}
        <div className='flex items-center gap-x-[10px]'>
            <img src={Clock} alt={"Clock"}/>
            {/* Date time  */}
            <p className='text-grayOpacity'>May 06 2022</p>
        </div>
    </div>
  )
}

export default ProgressFooter