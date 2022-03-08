import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Products } from "./App";
import { SortBy } from "./SortBy";
import { Filters } from "./Filters";
import { ProductsProvider } from "./products-context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <SortBy />
      <Filters />
      <Products />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
