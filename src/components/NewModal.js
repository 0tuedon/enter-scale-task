import React from 'react';
import ReactDOM from 'react-dom';

import ProgressForm from './ProgressForm';

const NewModal = ({ active, setActive }) => {
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
        {/* New Ticket text */}
        <div className="px-[20px] border-b justify-between flex items-center py-[10px]">
          <h4 className="text-[25px] font-medium">Add New Ticket </h4>
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
        {/* Form Component */}
        <ProgressForm setActive={setActive} />
      </div>
    </div>
  );
};

export const Modal = ({ active, setActive }) => {
  return ReactDOM.createPortal(
    <NewModal active={active} setActive={setActive} />,
    document.body,
  );
};
