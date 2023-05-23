import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShopContext } from "../../Context/index.jsx";

function Home() {
  const context = useContext(ShopContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.filteredItems?.map((item) => (
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
      );
    } else {
      return (
        <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {context.filteredItems?.map((item) => (
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
      );
    }
  };

  return (
    <Layout>
      <div className="flex w-80 justify-center relative items-center">
        <h1 className="font-medium text-xl mb-4">Exclusive Products</h1>
      </div>
      <input
        value={context.searchValue}
        onChange={(event) => {
          // console.log(event.target.value);
          context.setSearchValue(event.target.value);
        }}
        className="rounded-lg w-80 p-3 mb-4 border border-black"
        type="text"
        placeholder="Search ur product"
      />
      {renderView()}

      <ProductDetail />
    </Layout>
  );
}

export default Home;
