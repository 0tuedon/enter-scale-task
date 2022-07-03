
export const changeStatus = (id,data) => {
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


export const DeleteId = (id) => {
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
