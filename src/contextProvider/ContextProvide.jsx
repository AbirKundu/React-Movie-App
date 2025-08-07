// src/contextProvider/ContextProvider.jsx
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState("Hello from context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
