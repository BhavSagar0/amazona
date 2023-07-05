import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import cookie from "js-cookie";

const cartItems = cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;