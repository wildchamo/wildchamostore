import { createContext } from "react";

const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};
