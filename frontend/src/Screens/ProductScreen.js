import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/data";

const ProductScreen = (props) => {
  const params = useParams();
  console.log(params.id);
  const product = data.products.find((x) => x._id === params.id);
  return (
    <div>
      <div className="back-to-results">
        <Link to="/">Back to Results</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>{product.rating} Stars ({product.numReviews} Customer Reviews)</li>
            <li>
              <strong>{product.price}</strong>
            </li>
            <li>Description :{product.description}</li>
          </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price : {product.price}
                </li>
                <li>
                    Status : {product.status}
                </li>
                <li>
                    Qty : 
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>                       
                    </select>
                </li>
                <li>
                    <button>Add to Cart</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
