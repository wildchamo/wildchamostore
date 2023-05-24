import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home/";
import MyAccount from "../MyAccount/";
import MyOrders from "../MyOrders/";
import MyOrder from "../MyOrder/";
import NotFound from "../NotFound/";
import SignIn from "../SignIn/";
import Navvar from "../../Components/Navvar.jsx";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import { ShopContextProvider, ShopContext } from "../../Context";

import "./App.css";

const AppRoutes = () => {
  const context = useContext(ShopContext);

  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const signout = localStorage.getItem("signout");
  const parsedsignout = JSON.parse(signout);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalSate = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalSate;

  const isUserSignout = parsedsignout || context.signout;

  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Home />,
    },
    {
      path: "/my-account",
      element:
        hasUserAccount && !isUserSignout ? (
          <MyAccount />
        ) : (
          <Navigate to="/sign-in" />
        ),
    },
    {
      path: "/my-orders",
      element:
        hasUserAccount && !isUserSignout ? (
          <MyOrders />
        ) : (
          <Navigate to="/sign-in" />
        ),
    },
    {
      path: "/my-order",
      element:
        hasUserAccount && !isUserSignout ? (
          <MyOrder />
        ) : (
          <Navigate to="/sign-in" />
        ),
    },
    {
      path: "/my-orders/last",
      element:
        hasUserAccount && !isUserSignout ? (
          <MyOrder />
        ) : (
          <Navigate to="/sign-in" />
        ),
    },
    ,
    {
      path: "/my-orders/:id",
      element:
        hasUserAccount && !isUserSignout ? (
          <MyOrder />
        ) : (
          <Navigate to="/sign-in" />
        ),
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navvar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
