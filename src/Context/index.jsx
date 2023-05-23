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
  //search by category
  const [searchByCategory, setSearchByCategory] = useState("");

  const filterItems = (items, searchVal) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
  };

  const filterItemsbyCategory = (items, category) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchValue, searchByCategory) => {
    if (!searchType) {
      return setFilteredItems(items);
    }
    if (searchType === "BY_TYTLE") {
      setFilteredItems(filterItems(items, searchValue));
    }
    if (searchType === "BY_CATEGORY") {
      return setFilteredItems(filterItemsbyCategory(items, searchByCategory));
    }
    if (searchType === "BY_CATEGORY_AND_TITLE") {
      return setFilteredItems(
        filterItemsbyCategory(items, searchByCategory).filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    if (searchValue && !searchByCategory) {
      filterBy("BY_TYTLE", items, searchValue, searchByCategory);
    }
    if (searchByCategory && !searchValue) {
      filterBy("BY_CATEGORY", items, searchValue, searchByCategory);
 
    }
    if (searchByCategory && searchValue) {
      filterBy("BY_CATEGORY_AND_TITLE", items, searchValue, searchByCategory);
    }
    if (!searchByCategory && !searchValue) {
      filterBy(false, items);
    }

  }, [items, searchValue, searchByCategory]);


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
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
