import React, { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';

import ProgressSection from './ProgressSection';
import { ticketState } from '../atoms/ticketState';

const TicketStatus = () => {
  const [ticket, setTickets] = useRecoilState(ticketState);

  const onDragEnd = useCallback(
    (result) => {
      if (result.reason === 'DROP') {
        const theTicket = ticket.findIndex(
          (item) => item.id === result.draggableId,
        );

        if (result.destination.droppableId !== 'All') {
          const newTicket = [
            ...ticket.slice(0, theTicket),
            { ...ticket[theTicket], status: result.destination.droppableId },
            ...ticket.slice(theTicket + 1),
          ];
          setTickets(newTicket);
        }
      }
    },
    [setTickets, ticket],
  );

  return (
    <div className="flex overflow-x-scroll scrollbar gap-x-[20px] mt-[30px]">
      <DragDropContext onDragEnd={onDragEnd}>
        <ProgressSection name="All" />
        <ProgressSection name="In Progress" />
        <ProgressSection name="Resolved" />
      </DragDropContext>
    </div>
  );
};

export default TicketStatus;
