"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { ClientConfig, defaultClient } from "@/config/clients";

const ClientContext = createContext<ClientConfig>(defaultClient);

export const ClientProvider = ({ 
  config, 
  children 
}: { 
  config: ClientConfig; 
  children: ReactNode; 
}) => {
  return (
    <ClientContext.Provider value={config}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
