import React from 'react'
import Button from './Button'
import Search from './Search'
import Add from '../assets/svgs/plus.svg'

const NewTicketLine = () => {
  return (
    <div
    className='flex items-center justify-between '
    >
        {/* Left side of new Ticket line */}
        <div className='flex'>
            {/* Search box */}
         <Search/>  
          
        </div>
        {/* New Ticket Button */}
        <div>
            <Button
            styles={`
            flex items-center 
            text-[18px] font-semibold
            text-white
            px-[10px]
            justify-center
            gap-x-[20px]
            h-[51px] rounded-[10px]
            `}
            >
             <img src={Add}  alt={"Plus Icon"}   />
             New Ticket
                </Button>
        </div>
    </div>
  )
}

export default NewTicketLine