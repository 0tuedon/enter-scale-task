import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import ProgressCard from './ProgressCard'

const ProgressSection = ({ name, ticketsData }) => {

  return (
    <Droppable key={name} droppableId={name}>
      {(provided) => (
        <div className='bg-gray1 
          md:w-[750px]
          w-[350px]
          min-w-[300px]
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
            {ticketsData.length > 0  && ticketsData.map(data => <ProgressCard key={data?.id} data={data} />)}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default ProgressSection