import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShopContext } from "../../Context/index.jsx";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


function MyOrder() {
  const context = useContext(ShopContext);
  console.log(context.order.slice(-1)[0].products);

  return (
    <Layout>
      <div className="flex w-80 justify-center relative items-center mb-5">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1 className="text-lg font-bold">My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.title}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
