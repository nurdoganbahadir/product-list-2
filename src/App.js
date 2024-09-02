import { useState } from "react";
import { products } from "./helper/data";
import "./App.scss";
import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const matchesSearch =
      search === "" ||
      product.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header setSearch={setSearch} setSelectedCategory={setSelectedCategory} />
      <ProductList filteredProducts={filteredProducts} />
    </>
  );
}

export default App;
