import React, { createContext, useEffect, useState } from "react";

export const RequestsContext = createContext({});

function RequestsProvider({ children }) {
  const data = JSON.parse(localStorage.getItem("clients"));
  const [clients, setClients] = useState(data ?? []);

  function addClientInList(client) {
    setClients([...clients, client]);
  }

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  return (
    <RequestsContext.Provider
      value={{
        clients,
        addClientInList,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export default RequestsProvider;
