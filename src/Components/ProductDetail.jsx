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

      <h1>{context.focusProduct.title}</h1>

    </aside>
  );
}

export default ProductDetail;
