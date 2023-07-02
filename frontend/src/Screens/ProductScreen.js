import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const handleQty = (event) => {
    setQty(event.target.value);
  };

  const params = useParams();
  const productDetails = useSelector((state) => state.productDetails);

  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(params.id));
    return () => {};
  }, []);

  const handleAddToCart = () => {
    navigate("/cart/" + params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className="back-to-results">
        <Link to="/">Back to Results</Link>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} Customer Reviews)
              </li>
              <li>
                Price: <strong>${product.price}</strong>
              </li>
              <li>Description :{product.description}</li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price : {product.price}</li>
              <li>Status : {product.countInStock > 0 ? "InStock" : "Out of Stock"}</li>
              <li>
                Qty :
                <select disabled={!product.countInStock} value={qty} onClick={handleQty}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 &&
                  <button onClick={handleAddToCart} className="button primary">
                    Add to Cart
                  </button>}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
