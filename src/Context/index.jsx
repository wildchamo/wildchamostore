import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isProductDOpen, setIsProductDOpen] = useState(false);
  const [CheckOutSideOpen, setCheckOutSideOpen] = useState(false);

  const [focusProduct, setFocusProduct] = useState({});
  const [cardProducts, setcardProducts] = useState([]);

  const openProductD = () => {
    setIsProductDOpen(true);
  };
  const closeProductD = () => {
    setIsProductDOpen(false);
  };
  const openCheckOutSideOpen = () => {
    setCheckOutSideOpen(true);
  };
  const closeCheckOutSideOpen = () => {
    setCheckOutSideOpen(false);
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
        cardProducts,
        setcardProducts,

        CheckOutSideOpen,
        openCheckOutSideOpen,
        closeCheckOutSideOpen
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
