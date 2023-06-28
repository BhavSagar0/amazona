import { useState } from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
const HomeScreen = (props) => {

  const [products, setProducts] = useState([]);

  return (
    <ul className="products">
      {data.products.map((product, i) => (
        <li key={i}>
          <div className="product">
            <Link to={"/products/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={"/products/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
