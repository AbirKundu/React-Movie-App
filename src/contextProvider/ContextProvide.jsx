// src/contextProvider/ContextProvider.jsx
import React, { createContext, useContext, useState } from 'react';

// Create context
const RltContext = createContext();

// Context Provider
export const ContextProvider = ({ children }) => {
  const [rtl, setRtl] = useState(false); // example value, modify as needed

  return (
    <RltContext.Provider value={{ rtl, setRtl }}>
      {children}
    </RltContext.Provider>
  );
};

// Custom hook
export const useRlt = () => {
  const { rtl } = useContext(RltContext);
  return rtl;
};
