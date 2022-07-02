import React, { useState } from 'react'
import Button from './Button'
import Search from './Search'
import Add from '../assets/svgs/plus.svg'
import { Modal } from './NewModal'

const NewTicketLine = () => {
  // state to manage the modal 
  const [active,setActive]= useState(false)
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
            click={()=>{setActive(true)}}
            styles={`
            
            `}
            >
             <img src={Add}  alt={"Plus Icon"}   />
             New Ticket
                </Button>
        </div>
        {/* conditional rendering for the modal */}

        {active && <Modal 
        active={active} 
        setActive={setActive}/>}
    </div>
  )
}

export default NewTicketLine