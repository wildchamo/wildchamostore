import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [isProductDOpen, setIsProductDOpen] = useState(false);
  const [CheckOutSideOpen, setCheckOutSideOpen] = useState(false);

  const [focusProduct, setFocusProduct] = useState({});
  const [cardProducts, setcardProducts] = useState([]);
  const [order, setOrder] = useState([]);

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

  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const [searchValue, setSearchValue] = useState("");

  const filterItems = (items, searchVal) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchValue) {
      setFilteredItems(filterItems(items, searchValue));
    }
  }, [items, searchValue]);

  console.log(filteredItems);

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
        items,
        setItems,
        searchValue,
        setSearchValue,
        filteredItems
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
