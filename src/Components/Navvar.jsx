import React from "react";
import { NavLink } from "react-router-dom";

function Navvar() {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light">
      <ul className="flex items-center gap-3">
        <li className="font-bold">
          <NavLink to="/">Wildchamo Store</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnites">Furnites</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/my-order">My Order</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">SignIn</NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  );
}

export default Navvar;
