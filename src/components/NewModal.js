import React from 'react'
import  ReactDOM  from 'react-dom'
import ProgressForm from './ProgressForm'
const NewModal = () => {
  return (
    // Modal
    <div className='
    absolute w-[100%] 
    bg-backdrop
    z-10
    h-[100vh]
    top-0
    flex justify-center items-center
    '>
        {/* The Add New Ticket Form */}
        <div
        className='w-[600px] h-[500px] 
        bg-white rounded-[10px]
        overflow-y-scroll
        '
        >
            {/* New Ticket text */}
            <div className='px-[20px] border-b  py-[10px]'>
            <h4 className='text-[25px] font-bold'>Add New Ticket </h4>
            </div>
        {/* Form Component */}
        <ProgressForm/>
          
        </div>
    
    </div>
  )
}


export const Modal = ()=>{
    return ReactDOM.createPortal(<NewModal/>,document.body)
}