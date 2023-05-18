import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [isProductDOpen, setIsProductDOpen] = useState(false);
  const [CheckOutSideOpen, setCheckOutSideOpen] = useState(false);

  const [focusProduct, setFocusProduct] = useState({});
  const [cardProducts, setcardProducts] = useState([]);
  const [order, setOrder] = useState([]);
  console.log(order);

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
        openProductD,
        closeProductD,
        isProductDOpen,
        focusProduct,
        setFocusProduct,
        cardProducts,
        setcardProducts,

        CheckOutSideOpen,
        openCheckOutSideOpen,
        closeCheckOutSideOpen,

        //order
        order,
        setOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
