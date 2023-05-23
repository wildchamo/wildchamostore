import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/index.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "./OrderCard.jsx";
import { totalPrice } from "../utils/index.js";
import "./ProductDetail.css";

function CheckOutSideMenu() {
  const context = useContext(ShopContext);

  const navigate = useNavigate();

  const removeElement = (title) => {
    const filteredProduct = context.cardProducts.filter(
      (product) => product.title !== title
    );
    context.setcardProducts(filteredProduct);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.cardProducts,
      totalProducts: context.cardProducts.length,
      totalPrice: totalPrice(context.cardProducts),
    };
    context.setcardProducts([]);

    context.setSearchValue("");
    context.setOrder([...context.order, orderToAdd]);
    navigate("/my-orders/last");

  };

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
      <div className="overflow-y-scroll flex-1">
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
      <div>
        <p className="flex justify-between items-center mb-2">
          <span>Total:</span>
          <span className="text-2xl font-medium">
           $ {totalPrice(context.cardProducts)}
          </span>
        </p>
        <button className="bg-black text-white w-full py-3 rounded" onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </aside>
  );
}

export default CheckOutSideMenu;
