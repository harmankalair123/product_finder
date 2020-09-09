import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import ProductSearch from "./components/ProductSearch/index";
import ProductSelect from "./components/ProductSelect/index";
import IProduct from "./models/product";

function App() {
  let [product, setproduct] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((response) => setproduct(response));
  }, []);

  return <div className="App"></div>;
}

export default App;
