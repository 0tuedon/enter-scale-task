import React from 'react';

import NewTicketLine from '../components/NewTicketLine';
import TicketSection from '../components/TicketSection';
import TicketStatus from '../components/TicketStatus';

const Home = () => {
  return (
    <div
      className="
    px-[10px]
    md:px-[40px] py-[30px]"
    >
      <TicketSection />
      <NewTicketLine />
      <TicketStatus />
    </div>
  );
};

export default Home;
