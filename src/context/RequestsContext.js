import React, { createContext, useState } from "react";

export const RequestsContext = createContext({});

function RequestsProvider({ children }) {
  const [clients, setClients] = useState([]);

  function addClientInList(client) {
    setClients([...clients, client]);
  }

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
