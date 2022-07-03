import React from 'react'

const ArchiveMenu = ({ idNumber, data }) => {
    const RestoreId = (id) => {
        let archivedDeleted = JSON.parse(localStorage.getItem("archive-deleted")) || []
        const ticketsData = localStorage.getItem('tickets-data')
        console.log(archivedDeleted,"archive")
        if (archivedDeleted) {
            if (!Array.isArray(archivedDeleted)) {
            archivedDeleted = [archivedDeleted]
            }
            const filter = archivedDeleted.filter(data => data.id !== id)
            const found = archivedDeleted.find(data => data.id === id)
            const newData = [
                ...filter
            ]
            localStorage.setItem("tickets-data", JSON.stringify(newData))
            if (ticketsData) {
                const parsedTickets = archivedDeleted
                const passedRestore = localStorage.getItem("passed-restore");
                if (passedRestore) {

                    const newTickets = JSON.stringify([found, ...parsedTickets]);
                    localStorage.setItem("tickets-data", newTickets);
                    localStorage.setItem("archive-deleted",filter)
                } else {
                    const newTickets = JSON.stringify([found, ...parsedTickets]);
                    localStorage.setItem("tickets-data", newTickets);
                    localStorage.setItem("passed-restore", true);
                    localStorage.setItem("archive-deleted",filter)
                }
            }
            else {
                localStorage.setItem("tickets-data", JSON.stringify(found));
                localStorage.setItem("archive-deleted",filter|| [])
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
                    onClick={() => { RestoreId(idNumber) }}
                    className='hover:bg-enterGreen'
                >Restore</li>
                <li
                    onClick={() => {}}
                    className='hover:bg-enterGreen'> Delete Fully</li>
            </ul>
        </div>
    )
}

export default ArchiveMenu