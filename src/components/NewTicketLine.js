import React, { useState } from 'react';
import Button from './Button';
import Search from './Search';
import Add from '../assets/svgs/plus.svg';
import { Modal } from './NewModal';
import { ModalArchive } from './ArchiveModal';

const NewTicketLine = () => {
  // state to manage the modal
  const [active, setActive] = useState(false);
  const [archive, setArchive] = useState(false);

  return (
    <div
      className="flex 
    flex-col
    md:flex-row 
    gap-y-[10px]
    md:items-center justify-between"
    >
      {/* Left side of new Ticket line */}
      <div className="flex">
        {/* Search box */}
        <Search />
      </div>
      {/* New Ticket Button */}
      <div className="flex gap-x-[15px]">
        <button
          onClick={() => {
            setArchive(true);
          }}
          className="text-enterRed font-semibold"
        >
          Deleted Tickets
        </button>
        <Button
          click={() => {
            setActive(true);
          }}
        >
          <img src={Add} alt={'Plus Icon'} />
          New Ticket
        </Button>
      </div>
      {/* conditional rendering for the modal */}
      {archive && <ModalArchive active={archive} setActive={setArchive} />}
      {active && <Modal active={active} setActive={setActive} />}
    </div>
  );
};

export default NewTicketLine;
