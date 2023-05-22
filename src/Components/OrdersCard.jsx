import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="w-80 p-4 flex justify-between items-center rounded-lg mb-4 border border-black">
        <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <span className="font-light">01.02.2023</span>
            <span className="font-light">{totalProducts} articles</span>
          </p>
          <div>
            <p className="font-medium text-2xl">${totalPrice}</p>
            <ChevronRightIcon className="h-6 w-6 text-black" />
          </div>
        </div>
    </div>
  );
}

export default OrdersCard;
