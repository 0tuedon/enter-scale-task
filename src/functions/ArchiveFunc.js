export const RestoreId = (id) => {
  let archivedDeleted =
    JSON.parse(localStorage.getItem('archive-deleted')) || [];
  const ticketsData = localStorage.getItem('tickets-data');
  if (archivedDeleted) {
    if (!Array.isArray(archivedDeleted)) {
      archivedDeleted = [archivedDeleted];
    }
    const filter = archivedDeleted.filter((data) => data.id !== id);
    const found = archivedDeleted.find((data) => data.id === id);
    const newData = [...filter];
    localStorage.setItem('tickets-data', JSON.stringify(newData));
    if (ticketsData) {
      const parsedTickets = JSON.parse(ticketsData);
      const passedRestore = localStorage.getItem('passed-restore');
      if (passedRestore) {
        const newTickets = JSON.stringify([found, ...parsedTickets]);
        localStorage.setItem('tickets-data', newTickets);
        localStorage.setItem('archive-deleted', filter);
        localStorage.setItem('passed', true);
      } else {
        const newTickets = JSON.stringify([found, ...parsedTickets]);
        localStorage.setItem('tickets-data', newTickets);
        localStorage.setItem('passed-restore', true);
        localStorage.setItem('archive-deleted', filter);
      }
    } else {
      localStorage.setItem('tickets-data', JSON.stringify(found));
      localStorage.setItem('archive-deleted', filter || []);
    }
    window.location.reload();
  }
};

// delete fully function
export const DeleteFullyId = (id) => {
  let deletedTickets = localStorage.getItem('archive-deleted');
  if (deletedTickets) {
    deletedTickets = JSON.parse(deletedTickets);
    if (!Array.isArray(deletedTickets)) {
      deletedTickets = [deletedTickets];
    }
    const filter = deletedTickets.filter((data) => data.id !== id);
    const newData = [...filter];
    localStorage.setItem('archive-deleted', JSON.stringify(newData));

    window.location.reload();
  }
};
