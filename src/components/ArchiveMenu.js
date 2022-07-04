import React from 'react';
import { useRecoilState } from 'recoil';
import { archiveTicketState, ticketState } from '../atoms/ticketState';
import { DeleteFullyId, } from '../functions/ArchiveFunc';

const ArchiveMenu = ({ idNumber, setActive,setModalActive }) => {

  const [ticket, setTickets] = useRecoilState(ticketState);
  const [archiveTickets, setArchiveTickets] =
useRecoilState(archiveTicketState);


// Restore fully 
const restoreTicket = (id) => {
console.log(id,"id")
console.log(archiveTickets,"all archived")
  const ticketToRestore = archiveTickets.filter((item) => item[0].id === id);
  const remainingTickets = archiveTickets.filter((item) => item[0].id !== id);
  console.log(ticketToRestore,"restored")
  console.log(remainingTickets,"rickets")
  setArchiveTickets(remainingTickets);
  const [removedArray] = ticketToRestore
  setTickets([ ...ticket,...removedArray])
  setActive(false)
  setModalActive(false)
};

// Delete fully 
const deleteFullyTicket = (id) => {

  const remainingTickets = archiveTickets.filter((item) => item[0].id !== id);
  setArchiveTickets(remainingTickets);
  setActive(false)
  setModalActive(false)
};
  return (
    <div
      className="absolute w-[110px] h-[80px]
    box
    right-8 top-20
    text-[14px]

    bg-white"
    >
      <ul className="flex justify-center gap-y-[15px] flex-col items-center">
        <li
          onClick={() => {
           restoreTicket(idNumber)
            setActive(false);
          }}
          className="
                    cursor-pointer
                    py-1
                    w-full
                    text-center
                    rounded-[5px]
                    hover:text-white
                    hover:bg-enterGreen"
        >
          Restore
        </li>
        <li
          onClick={() => {
            deleteFullyTicket(idNumber);
            setActive(false);
          }}
          className="
                    cursor-pointer
                    py-1
                    w-full
                    text-center
                    rounded-[5px]
                    
                    hover:text-white
                    hover:bg-enterRed"
        >
          {' '}
          Delete Fully
        </li>
      </ul>
    </div>
  );
};

export default ArchiveMenu;
