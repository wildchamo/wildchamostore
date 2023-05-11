import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isProductDOpen, setIsProductDOpen] = useState(false);

  const [focusProduct, setFocusProduct] = useState({});

  const openProductD = () => {
    setIsProductDOpen(true);
  };
  const closeProductD = () => {
    setIsProductDOpen(false);
  };

  return (
    <ShopContext.Provider
      value={{
        counter,
        setCounter,
        openProductD,
        closeProductD,
        isProductDOpen,
        focusProduct,
        setFocusProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
