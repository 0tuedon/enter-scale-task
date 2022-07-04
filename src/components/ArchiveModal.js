import React from 'react';
import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';

import ArchiveCard from './ArchiveCard';
import { archiveTicketState } from '../atoms/ticketState';

const NewModalArchive = ({ active, setActive }) => {
  const archiveTickets = useRecoilValue(archiveTicketState);
console.log(archiveTickets,"archive")
  return (
    // Modal
    <div
      className="
    absolute w-[100%] 
    bg-backdrop
    z-10
    h-[100vh]
    top-0
    flex justify-center items-center
    "
    >
      {/* The Add New Ticket Form */}
      <div
        className="w-[600px] h-[500px] 
        bg-white rounded-[10px]
        overflow-y-scroll
        "
      >
        {/* Archive Ticket text */}
        <div className="px-[20px] border-b justify-between flex items-center py-[10px]">
          <h4 className="text-[25px] font-medium">Delete Archive </h4>
          <p
            onClick={() => {
              setActive(false);
            }}
            className="
            cursor-pointer
            font-bold text-[20px]"
          >
            Back
          </p>
        </div>
        <div className="flex flex-col gap-y-[15px] px-[20px]">
          {archiveTickets.length > 0 &&archiveTickets.map((data) => (
            <ArchiveCard key={data[0].id} data={data[0]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ModalArchive = ({ active, setActive }) => {
  return ReactDOM.createPortal(
    <NewModalArchive active={active} setActive={setActive} />,
    document.body,
  );
};
