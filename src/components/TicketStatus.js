import React from 'react'
import { Status } from '../staticData'
import ProgressSection from './ProgressSection'

const TicketStatus = () => {
  return (
    <div className='flex 
    overflow-x-scroll
    gap-x-[20px] mt-[30px] '>
       {Status.map(data=>
        <ProgressSection key={data.tag} data={data}/>
        )}
    </div>
  )
}

export default TicketStatus