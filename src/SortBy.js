import React from "react";
import { useProducts } from "./products-context";

const SortBy = () => {
  const { state, dispatch } = useProducts();
  const { sortBy } = state;

  return (
    <fieldset>
      <legend>Sort By</legend>

      <input
        onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
        checked={sortBy === "HIGH_TO_LOW"}
        type="radio"
        name="sort"
        id="price-high-to-low"
      />
      <label htmlFor="price-high-to-low">Price - High to Low</label>

      <input
        onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
        checked={sortBy === "LOW_TO_HIGH"}
        type="radio"
        name="sort"
        id="price-low-to-high"
      />
      <label htmlFor="price-low-to-high">Price - Low to High</label>
    </fieldset>
  );
};

export { SortBy };
