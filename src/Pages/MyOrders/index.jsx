import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { useContext } from "react";
import { ShopContext } from "../../Context/index.jsx";


function MyOrders() {
  const context = useContext(ShopContext);
  console.log(context.order);

  return (
    <Layout>
      <div className="flex w-80 justify-center relative items-center">
        <h1 className="font-medium text-xl mb-4">MyOrders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
