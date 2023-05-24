import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/index.jsx";

function Navvar() {
  const context = useContext(ShopContext);
  let activeStyle = "underline underline-offset-4";

  //signout
  const signoutStorage = localStorage.getItem("signout");
  const parsedSignout = JSON.parse(signoutStorage);
  const isusersignout = parsedSignout || context.signout;

  const handleSignOut = () => {
    const stringifiedSignout = JSON.stringify(true);
    localStorage.setItem("signout", stringifiedSignout);
    context.setSignout(true);
  };

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalSate = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalSate;

  const renderView = () => {
    if (hasUserAccount && !isusersignout) {
      return (
        <>
        <li className="text-black/60">
          {parsedAccount?.email}
        </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-order"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => {
                handleSignOut();
              }}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-md font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-bold">
          <NavLink
            to={`${isusersignout ? "/sign-in" : "/"}`}
            onClick={() => {
              context.setSearchByCategory();
              context.setSearchValue("");
            }}
          >
            Wildchamo Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              context.setSearchByCategory();
              context.setSearchValue("");
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              context.setSearchByCategory("clothing");
              context.setSearchValue("");
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              context.setSearchByCategory("electronics");
              context.setSearchValue("");
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              context.setSearchByCategory("jewelery");
              context.setSearchValue("");
            }}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderView()}
        <li
          onClick={() => {
            context.openCheckOutSideOpen();
          }}
          className="flex flex-row gap-2"
        >
          <ShoppingCartIcon className="w-6 h-6 hover:cursor-pointer" />
          {context.cardProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export default Navvar;
