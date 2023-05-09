import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  console.log("count "+counter);

  return (
    <ShopContext.Provider value={{counter, setCounter}}>
      {children}
    </ShopContext.Provider>
  );
};
