import React from 'react'
import ProgressSection from './ProgressSection'

const TicketStatus = () => {
  return (
    <div className='flex 
    overflow-x-scroll
    gap-x-[20px] mt-[30px] '>
        <ProgressSection/>
        <ProgressSection/>
        <ProgressSection/>
    </div>
  )
}

export default TicketStatus