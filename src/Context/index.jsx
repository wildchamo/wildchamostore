import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <ShopContext.Provider value={{counter, setCounter}}>
      {children}
    </ShopContext.Provider>
  );
};
