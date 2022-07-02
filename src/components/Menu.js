import React from 'react'

const Menu = ({ idNumber, data }) => {
    const changeStatus = (id) => {
        const ticketsData = JSON.parse(localStorage.getItem("tickets-data")) || false
        if (ticketsData) {
            const filter = ticketsData.filter(data => data.id !== id)
            const found = ticketsData.find(data => data.id === id)

           
            if (data.status === 'In Progress') {
                found.status = "Resolved"
                console.log(found,"found")
                const sendData = [
                    found,...filter
                ]
                localStorage.setItem("tickets-data",JSON.stringify(sendData))
                window.location.reload()
            }
            else {
                console.log(found,"found")
                found.status = "In Progress"
                const sendData = [
                    found,
                    ...filter
                ]
                localStorage.setItem("tickets-data",JSON.stringify(sendData))
                window.location.reload()
            }
        }
    }
    return (
        <div className='absolute w-[110px] h-[80px]
    box
    right-8 top-20
    text-[14px]

    bg-white'>
            <ul className='flex justify-center gap-y-[15px] flex-col items-center'>
                <li
                    onClick={() => { changeStatus(idNumber) }}
                    className='hover:bg-enterGreen'
                >Change status</li>
                <li className='hover:bg-enterGreen'> Delete</li>

            </ul>
        </div>
    )
}

export default Menu