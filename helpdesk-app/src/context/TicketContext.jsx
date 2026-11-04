import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  // Menambahkan ticket
  const addTicket = (ticket) => {
    setTickets((previousTickets) => [
      ...previousTickets,
      {
        ...ticket,
        id: Date.now(),
        ticketNumber: `HD-${String(previousTickets.length + 1).padStart(3, "0")}`,
        status: "Open",
        createdAt: new Date().toLocaleString("id-ID"),
      },
    ]);
  };

  // Mengubah status ticket (Poin h: Resolved tidak bisa kembali ke Open)
  const updateTicketStatus = (id, status) => {
    setTickets((previousTickets) =>
      previousTickets.map((ticket) => {
        if (ticket.id === id) {
          if (ticket.status === "Resolved" && status === "Open") {
            return ticket;
          }
          return {
            ...ticket,
            status,
          };
        }
        return ticket;
      })
    );
  };

  // Menghapus 1 ticket berdasarkan ID (Poin f)
  const deleteTicket = (id) => {
    setTickets((previousTickets) =>
      previousTickets.filter((ticket) => ticket.id !== id)
    );
  };

  // Menghapus seluruh ticket
  const clearTickets = () => {
    setTickets([]);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        addTicket,
        updateTicketStatus,
        deleteTicket,
        clearTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  return useContext(TicketContext);
}