import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';

import { ticketState, archiveTicketState } from '../atoms/ticketState';

const Menu = ({ idNumber, setActive }) => {
  const [ticket, setTickets] = useRecoilState(ticketState);
  const [archiveTickets, setArchiveTickets] =
  useRecoilState(archiveTicketState);

  const changeStatus = (id) => {
    const theTicket = ticket.findIndex((item) => item.id === id);

    let newTicket;
    if (ticket[theTicket].status === 'Resolved') {
      newTicket = [
        ...ticket.slice(0, theTicket),
        { ...ticket[theTicket], status: 'In Progress' },
        ...ticket.slice(theTicket + 1),
      ];
    } else {
      newTicket = [
        ...ticket.slice(0, theTicket),
        { ...ticket[theTicket], status: 'Resolved' },
        ...ticket.slice(theTicket + 1),
      ];
    }
    setTickets(newTicket);
  };

  const archiveTicket = (id) => {
    const ticketToArchive = ticket.filter((item) => item.id === id);
    setArchiveTickets([...archiveTickets, ticketToArchive]);
    const remainingTickets = ticket.filter((item) => item.id !== id);
    setTickets(remainingTickets);
  };

  return (
    <>
      <ToastContainer autoClose={500} />
      <div className="absolute w-[120px] h-[90px] box right-8 top-20 text-[14px] rounded-[5px] flex justify-center items-center bg-white">
        <ul className="flex my-auto justify-center gap-y-[15px] flex-col items-center">
          <li
            onClick={() => {
              changeStatus(idNumber);
              setActive(false);
            }}
            className="cursor-pointer py-1 w-full text-center rounded-[5px] hover:bg-enterGreen hover:text-white"
          >
            Change status
          </li>
          <li
            onClick={() => {
              archiveTicket(idNumber);
              setActive(false);
            }}
            className="cursor-pointer py-1 rounded-[5px] hover:text-white w-full text-center hover:bg-enterRed"
          >
            Delete
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
