import React from "react";
import { useProducts } from "./products-context";

const Filters = () => {
  const { state, dispatch } = useProducts();

  return (
    <fieldset>
      <legend>Filters</legend>

      <input
        onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
        checked={state.includeOutOfStock}
        type="checkbox"
        id="out-of-stock"
      />
      <label htmlFor="out-of-stock">Include Out of Stock</label>

      <input
        onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
        checked={state.fastDeliveryOnly}
        type="checkbox"
        id="fast-delivery"
      />
      <label htmlFor="fast-delivery">Fast Delivery Only</label>

      <div>
        <label htmlFor="price-range">Price Range</label>
        <input type="range" min={0} max={1000} id="price-range" />
      </div>
    </fieldset>
  );
};

export { Filters };
