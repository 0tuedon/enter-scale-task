import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useRecoilValue } from 'recoil';

import { filteredTicketState } from '../atoms/ticketState';
import ProgressCard from './ProgressCard';

const ProgressSection = ({ name }) => {
  const tickets = useRecoilValue(filteredTicketState(name));

  return (
    <Droppable droppableId={name}>
      {(provided, snapshot) => {
        // console.log('provided: Droppable ', provided);

        return (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-gray1 
          md:w-[750px]
          w-[350px]
          min-w-[300px]
          px-[5px] py-[24px]"
          >
            {/* Tag Name */}
            <h4 className="text-[24px] font-medium">{name}</h4>
            {/* ProgressCards */}
            <div
              className="flex
         h-[500px]
         overflow-y-scroll
         thumb-[4px]
         scrollbar
        flex-col gap-y-[20px]"
            >
              {tickets.length > 0 &&
                tickets.map((data) => (
                  <ProgressCard key={data?.id} data={data} />
                ))}
            </div>
          </div>
        );
      }}
    </Droppable>
  );
};

export default ProgressSection;
