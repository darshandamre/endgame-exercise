import { data } from "./faker";
import {
  getFilteredProducts,
  getSortedProducts,
  useProducts
} from "./products-context";

const Products = () => {
  const { state } = useProducts();
  const { sortBy, includeOutOfStock, fastDeliveryOnly } = state;

  const products = getSortedProducts(data, sortBy);
  const filteredproducts = getFilteredProducts(
    products,
    includeOutOfStock,
    fastDeliveryOnly
  );

  return (
    <>
      <div className="product-container">
        {filteredproducts.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div key={id} className="product-card">
              <img src={image} className="product-image" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock ? <div> In Stock </div> : <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </>
  );
};

export { Products };
