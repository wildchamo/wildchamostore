import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
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
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
        {items?.map((item) => (
          <Card
            key={item.id}
            category={item.category}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </section>
    </Layout>
  );
}

export default Home;
