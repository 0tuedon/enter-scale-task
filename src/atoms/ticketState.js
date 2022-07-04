import { atom, selectorFamily } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const ticketState = atom({
  key: 'ticketState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const filteredTicketState = selectorFamily({
  key: 'filteredTicket',
  get:
    (progressStatus) =>
    ({ get }) => {
      const list = get(ticketState);

      let ticketList;
      switch (progressStatus) {
        case 'All':
          return list;
        case 'Resolved':
          ticketList = list.filter((item) => item.status === 'Resolved');
          return ticketList;
        case 'In Progress':
          ticketList = list.filter((item) => item.status === 'In Progress');
          return ticketList;
        default:
          return list;
      }
    },
});

export const archiveTicketState = atom({
  key: 'archiveTicketState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
