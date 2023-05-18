import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
        <p className="flex flex-col">
            <span>01.02.2023</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  );
}

export default OrdersCard;
