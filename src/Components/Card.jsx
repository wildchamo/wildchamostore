import React from "react";

function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs text-black px-3 py-0.5 m-2">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/983831/pexels-photo-983831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="headphones"
        />
        <section className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          +
        </section>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">HeadPhones</span>
        <span className="text-sm font-medium">300</span>
      </p>
    </div>
  );
}

export default Card;
