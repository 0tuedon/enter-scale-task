import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { DragDropContext } from 'react-beautiful-dnd'
import { changeStatus } from '../functions/Tickets'
import ProgressSection from './ProgressSection'

const TicketStatus = () => {
  const [tickets,setTickets] = useLocalStorage("tickets-data",[])

  useEffect(()=>{},[tickets.length])
  // logic for inprogress and resolved
  const inProgressFiltered = tickets.length > 0 && tickets.filter(
    data => data.status.includes('In Progress')
  )
  const resolved = tickets.length > 0 && tickets.filter(
    data => data.status.includes('Resolved')
  )
  return (
    <div className='flex 
    overflow-x-scroll
    scrollbar
    gap-x-[20px] mt-[30px] '>
      <DragDropContext onDragEnd={changeStatus}>
        <ProgressSection
          name={"All"}
          ticketsData={tickets} />
        <ProgressSection name={"In Progress"}
          ticketsData={inProgressFiltered } />
        <ProgressSection
          name={"Resolved"}
          ticketsData={resolved} />
      </DragDropContext>

    </div>
  )
}

export default TicketStatus