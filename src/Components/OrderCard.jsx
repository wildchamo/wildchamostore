import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderCard({ image, price, title, removeElement }) {
  return (
    <div className="flex justify-between items-center pb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-md font-light">{title}</p>
      </div>
      <p className="text-lg font-medium">{price} </p>
      {removeElement && (
        <div>
          <XMarkIcon
            onClick={() => removeElement(title)}
            className="h-6 w-6 text-black hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default OrderCard;
