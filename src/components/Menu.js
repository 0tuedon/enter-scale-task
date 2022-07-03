import React from 'react'
import { changeStatus, DeleteId } from '../functions/Tickets'

const Menu = ({ idNumber, data }) => {



    return (
        <div className='absolute w-[110px] h-[80px]
    box
    right-8 top-20
    text-[14px]

    bg-white'>
            <ul className='flex justify-center gap-y-[15px] flex-col items-center'>
                <li
                    onClick={() => { changeStatus(idNumber, data) }}
                    className='hover:bg-enterGreen'
                >Change status</li>
                <li
                    onClick={() => DeleteId(idNumber)}
                    className='hover:bg-enterGreen'> Delete</li>
            </ul>
        </div>
    )
}

export default Menu