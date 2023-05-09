import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/";
import MyAccount from "../MyAccount/";
import MyOrders from "../MyOrders/";
import MyOrder from "../MyOrder/";
import NotFound from "../NotFound/";
import SignIn from "../SignIn/";
import Navvar from "../../Components/Navvar.jsx";
import { ShopContextProvider } from "../../Context";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
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
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
