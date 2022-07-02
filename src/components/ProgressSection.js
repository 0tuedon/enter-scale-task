import React from 'react'
import ProgressCard from './ProgressCard'

const ProgressSection = ({data}) => {
  return (
    <div className='bg-gray1 
    w-[500px]
    h-[500px]
    px-[30px] py-[24px]'>
        {/* Tag Name */}
        <h4 className='text-[24px] font-medium'>
            {data?.name}</h4>
        {/* ProgressCards */}
        <ProgressCard/>
    </div>
  )
}

export default ProgressSection