import React from 'react'
import Button from './Button'
import Search from './Search'
import Add from '../assets/svgs/plus.svg'
import { Modal } from './NewModal'

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
            click={()=>{}}
            styles={`
            
            `}
            >
             <img src={Add}  alt={"Plus Icon"}   />
             New Ticket
                </Button>
        </div>

        <Modal/>
    </div>
  )
}

export default NewTicketLine