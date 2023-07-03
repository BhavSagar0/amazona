import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const CartScreen = (props) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const params = useParams();
  const productId = params.id;
  const [searchParams] = useSearchParams();
  const qty = Number(searchParams.get("qty")) || 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
        console.log('Ek baar aya!');
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty!</div>
          ) : (
            cartItems.map((item) => (
              <div>
                <img src={item.image} alt="product" />
                <div className="cart-name">
                  <div>{item.name}</div>
                  <div>
                    Qty:
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div>{item.price}</div>
              </div>
            ))
          )}
        </ul>
      </div>
      <div className="cart-actions"></div>
      Cart Screen
    </div>
  );
};

export default CartScreen;
