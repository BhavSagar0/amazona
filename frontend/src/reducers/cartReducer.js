import { CART_ADD_ITEM } from "../constants/cartConstants";

const cartReducer = (state = {cartItems: []}, action) => {
    switch(action)
    {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);

            if(product)
            {
                return { cartItems: state.cartItems.map(x => {
                    return x.product === product.product ? item : x;
                })};
            }
            else
                return {cartItems: [...state.cartItems, item] };

        default:
            return state;
    }
}

export {cartReducer}; 