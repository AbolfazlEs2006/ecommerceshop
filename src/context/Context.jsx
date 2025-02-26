import React, { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <Context.Provider value={{ basket, setBasket }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
