import React from 'react'

const Menu = ({ idNumber, data }) => {
    const changeStatus = (id) => {
        const ticketsData = JSON.parse(localStorage.getItem("tickets-data")) || false
        if (ticketsData) {
            const filter = ticketsData.filter(data => data.id !== id)
            const found = ticketsData.find(data => data.id === id)


            if (data.status === 'In Progress') {
                found.status = "Resolved"
        
                const sendData = [
                    found, ...filter
                ]
                localStorage.setItem("tickets-data", JSON.stringify(sendData))
                window.location.reload()
            }
            else {
                console.log(found, "found")
                found.status = "In Progress"
                const sendData = [
                    found,
                    ...filter
                ]
                localStorage.setItem("tickets-data", JSON.stringify(sendData))
                window.location.reload()
            }
        }
    }

    const DeleteId = (id) => {
        const ticketsData = JSON.parse(localStorage.getItem("tickets-data")) || []
        const deletedTickets = localStorage.getItem('archive-deleted')
        if (ticketsData) {
            const filter = ticketsData.filter(data => data.id !== id)
            const found = ticketsData.find(data => data.id === id)
            const newData = [
                ...filter
            ]
            localStorage.setItem("tickets-data", JSON.stringify(newData))
            if (deletedTickets) {
                const parsedDeleted = JSON.parse(deletedTickets)
                const passedHere = localStorage.getItem("passed-deleted");
                if (passedHere) {

                    const newTickets = JSON.stringify([found, ...parsedDeleted]);
                    localStorage.setItem("archive-deleted", newTickets);
                } else {
                    const newTickets = JSON.stringify([found, parsedDeleted]);
                    localStorage.setItem("archive-deleted", newTickets);
                    localStorage.setItem("passed", true);
                }
            }
            else {
                localStorage.setItem("archive-deleted", JSON.stringify(found));
            }
            window.location.reload()
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
                <li
                    onClick={() => DeleteId(idNumber)}
                    className='hover:bg-enterGreen'> Delete</li>
            </ul>
        </div>
    )
}

export default Menu