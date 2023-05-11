import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./ProductDetail.css";

function ProductDetail() {
  return (
    <aside className="productDetail flex flex-col fixed bg-white right-0 border border-black rounded-lg">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon className="h-6 w-6 text-black hover:cursor-pointer" />
      </div>
    </aside>
  );
}

export default ProductDetail;
