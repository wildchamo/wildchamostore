import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import { useState, useEffect } from "react";

function Home() {
  const [items, setItems] = useState(null);
  console.log(items);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      {items?.map((item) => (
        <Card key={item.id} />
      ))}
    </Layout>
  );
}

export default Home;
