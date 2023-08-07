import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import cookie from "js-cookie";
import { userSigninReducer } from './reducers/userReducers';

const cartItems = cookie.getJSON("cartItems") || [];
const userInfo = cookie.getJSON('userInfo') || null;

const initialState = {cart: {cartItems}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;