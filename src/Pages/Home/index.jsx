import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useState, useEffect } from "react";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card
            key={item.id}
            category={item.category}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
