import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isProductDOpen, setIsProductDOpen] = useState(false);

  const openProductD = () => {
    setIsProductDOpen(!isProductDOpen)
  }

  return (
    <ShopContext.Provider
      value={{ counter, setCounter, openProductD, isProductDOpen }}
    >
      {children}
    </ShopContext.Provider>
  );
};
