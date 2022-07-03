import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { changeStatus } from '../functions/Tickets'
import ProgressSection from './ProgressSection'

const TicketStatus = () => {
  let ticketsData = localStorage.getItem("tickets-data")
  if (ticketsData) {
    let ticketsCheck = JSON.parse(ticketsData)
    if (Array.isArray(ticketsCheck)) {
      ticketsData = ticketsCheck
    }
    else {
      ticketsData = [ticketsCheck]
    }
  }
  else {
    ticketsData = []
  }
  console.log(ticketsData, "data-ticket")

  // logic for inprogress and resolved
  const inProgressFiltered = ticketsData.filter(
    data => data.status.includes('In Progress')
  )
  const resolved = ticketsData.filter(
    data => data.status.includes('Resolved')
  )
  console.log(inProgressFiltered, 'in progress')
  return (
    <div className='flex 
    overflow-x-scroll
    scrollbar
    gap-x-[20px] mt-[30px] '>
      <DragDropContext  onDragEnd={changeStatus}>
        <ProgressSection
          name={"All"}
          ticketsData={ticketsData} />
        <ProgressSection name={"In Progress"} ticketsData={inProgressFiltered} />
        <ProgressSection
          name={"Resolved"}
          ticketsData={resolved} />
      </DragDropContext>

    </div>
  )
}

export default TicketStatus