import React from 'react'
import ProgressCard from './ProgressCard'

const ProgressSection = ({name,ticketsData}) => {
 
  return (
    <div className='bg-gray1 
    w-[750px]
   
    px-[5px] py-[24px]'>
        {/* Tag Name */}
        <h4 className='text-[24px] font-medium'>
            {name}</h4>
        {/* ProgressCards */}
        <div className='flex
         h-[500px]
         overflow-y-scroll
         thumb-[4px]
         scrollbar
        flex-col gap-y-[20px]'>
        {ticketsData.map(data=><ProgressCard data={data}/>)}
        </div>
    </div>
  )
}

export default ProgressSection