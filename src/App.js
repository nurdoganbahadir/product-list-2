import { useState } from "react";
import { products } from "./helper/data";
import "./App.scss";
import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";

function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((products) =>
    products.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header setSearch={setSearch} />
      <ProductList filteredProducts={filteredProducts} />
    </>
  );
}

export default App;
