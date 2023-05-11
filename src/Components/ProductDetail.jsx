import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/index.jsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./ProductDetail.css";

function ProductDetail() {
  const context = useContext(ShopContext);

  return (
    <aside
      className={` ${
        context.isProductDOpen
          ? "productDetail flex flex-col fixed bg-white right-0 border border-black rounded-lg p-6"
          : "hidden"
      } `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon onClick={()=>{context.closeProductD()}} className="h-6 w-6 text-black hover:cursor-pointer" />
      </div>
      <figure>
        <img src={context.focusProduct.image}  alt="" />
      </figure>
      <p className="flex flex-col p-2">
        <span className="font-medium text-2xl">{context.focusProduct.price}</span>
        <span className="font-medium text-md">{context.focusProduct.title}</span>
      <span className="font-light text-sm">{context.focusProduct.description}</span>
      </p>

    </aside>
  );
}

export default ProductDetail;
