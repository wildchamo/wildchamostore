import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopContext } from "../Context/index.jsx";

function Card({ category, image, price, title, description }) {
  const context = useContext(ShopContext);

  const showProduct = () => {
    context.openProductD();
    context.setFocusProduct({ category, image, price, title, description });
  };
  const addCard = (title, price) => {
    context.setCounter(context.counter + 1);
    context.setcardProducts([...context.cardProducts, { title, price }]);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={(category, image, price, title) => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs text-black px-3 py-0.5 m-2">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt="headphones"
        />
        <section
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-5 h-5 rounded-full m-2"
          onClick={() => {
            addCard(title, price);
          }}
        >
          <PlusIcon className="h-4 w-4 text-black hover:cursor-pointer" />
        </section>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-sm font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
