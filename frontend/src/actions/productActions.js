import axios from "axios";
import { PRODUCT_DETAILS_ERROR, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

const listProducts = () => async (dispatch) => {
    try{
    dispatch({ type : PRODUCT_LIST_REQUEST});
    const {data} = await axios.get('/api/products');
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }
    catch(error)
    {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try{
        dispatch({ type : PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get('/api/products/' + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
        }
        catch(error)
        {
            dispatch({type: PRODUCT_DETAILS_ERROR, payload: error.message});
        }
}

export {listProducts, detailsProduct};