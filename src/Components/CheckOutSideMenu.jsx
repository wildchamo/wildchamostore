import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/index.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "./OrderCard.jsx";
import "./ProductDetail.css";

function CheckOutSideMenu() {
  const context = useContext(ShopContext);

  const removeElement = (title) => {
    const filteredProduct= context.cardProducts.filter(product => product.title !== title)
    context.setcardProducts(filteredProduct) 
  }

  return (
    <aside
      className={` ${
        context.CheckOutSideOpen
          ? "checkOutSideMenu flex flex-col fixed bg-white right-0 border border-black rounded-lg p-3"
          : "hidden"
      } `}
    >
      <div className="flex justify-between items-center pb-4 ">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon
          onClick={() => {
            context.closeCheckOutSideOpen();
          }}
          className="h-6 w-6 text-black hover:cursor-pointer"
        />
      </div>
      <div className="overflow-y-scroll">
        {context.cardProducts.map((product) => (
          <OrderCard
            key={product.title}
            image={product.image}
            price={product.price}
            title={product.title}
            removeElement={removeElement}
            
          />
        ))}
      </div>
    </aside>
  );
}

export default CheckOutSideMenu;
