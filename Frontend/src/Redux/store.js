import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailstReducer,
  productListReducer,
} from "./Reducers/ProductReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailstReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
