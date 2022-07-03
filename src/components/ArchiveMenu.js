import React from 'react'
import { DeleteFullyId, RestoreId } from '../functions/ArchiveFunc'

const ArchiveMenu = ({ idNumber }) => {
    return (
        <div className='absolute w-[110px] h-[80px]
    box
    right-8 top-20
    text-[14px]

    bg-white'>
            <ul className='flex justify-center gap-y-[15px] flex-col items-center'>
                <li
                    onClick={() => { RestoreId(idNumber) }}
                    className='hover:bg-enterGreen'
                >Restore</li>
                <li
                    onClick={() => { DeleteFullyId(idNumber) }}
                    className='hover:bg-enterGreen'> Delete Fully</li>
            </ul>
        </div>
    )
}

export default ArchiveMenu