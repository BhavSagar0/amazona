import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = (props) => {
  // const [products, setProducts] = useState([]);

  const productList = useSelector(state => state.productList);

  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    // const fetchData = async () => {
    //   const {data} = await axios.get('/api/products');
    //   setProducts(data);
    // }
    // fetchData();
    return () => {
    };
  }, [])
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //     }
  //     catch(err)
  //     {
  //       console.error(err.response.data);
  //       console.error(err.response.status);
  //       console.error(err.response.headers);
  //     }
      
  //   };
  //   fetchData();
  //   return () => {};
  // }, []);

  return (
    <ul className="products">
      {products.map((product, i) => (
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
