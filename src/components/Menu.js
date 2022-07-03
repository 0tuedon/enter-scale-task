import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { changeStatus, DeleteId } from '../functions/Tickets'


const Menu = ({ idNumber, data, setActive }) => {



    return (
        <>
        <ToastContainer
        autoClose={500}
        />
        <div className='absolute w-[120px] h-[90px]
    box
    right-8 top-20
    text-[14px]
        rounded-[5px]
        flex justify-center items-center
    bg-white'>
            <ul className='flex my-auto justify-center gap-y-[15px] flex-col items-center'>
                <li
                    onClick={() => { 
                        changeStatus(idNumber, data);
                        setActive(false)
                    }}
                    className='
                    cursor-pointer
                    py-1
                    w-full
                    text-center
                    rounded-[5px]
                    hover:bg-enterGreen
                    hover:text-white
                    '
                >Change status</li>
                <li
                    onClick={() => {
                        DeleteId(idNumber);
                        setActive(false)
                    }}
                    className='
                    cursor-pointer
                    py-1
                    rounded-[5px]
                    hover:text-white
                    w-full
                    text-center
                    hover:bg-enterRed'> Delete</li>
            </ul>
        </div>
        </>
    )
}

export default Menu