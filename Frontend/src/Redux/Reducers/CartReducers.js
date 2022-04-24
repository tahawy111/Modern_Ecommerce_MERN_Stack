import { CART_ADD_ITEM } from "../Constants/CartConstants";

export const CartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItems = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (existItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItems.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
