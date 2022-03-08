import { createContext, useReducer, useContext } from "react";

const ProductsContext = createContext();

const initialState = {
  includeOutOfStock: true,
  fastDeliveryOnly: false,
  sortBy: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload
      };
    case "TOGGLE_STOCK":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock
      };
    case "TOGGLE_DELIVERY":
      return {
        ...state,
        fastDeliveryOnly: !state.fastDeliveryOnly
      };
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

const getSortedProducts = (products, sortBy) => {
  if (sortBy === "HIGH_TO_LOW") {
    return products.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "LOW_TO_HIGH") {
    return products.sort((a, b) => a.price - b.price);
  }

  return products;
};

const getFilteredProducts = (products, includeOutOfStock, fastDeliveryOnly) => {
  return products
    .filter(product => (includeOutOfStock ? true : product.inStock))
    .filter(product => (fastDeliveryOnly ? product.fastDelivery : true));
};

export {
  ProductsProvider,
  useProducts,
  getSortedProducts,
  getFilteredProducts
};
