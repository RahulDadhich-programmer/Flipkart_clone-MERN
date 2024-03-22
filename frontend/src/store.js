import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  cartReducer,
  getFilterReducer,
  getFooterReducers,
  getHomeReducers,
  getProductDetailReducer,
  getProductListReducers,
} from "./reducers/Reducers";

const reducer = combineReducers({
  getHome: getHomeReducers,
  getProductList: getProductListReducers,
  getFooter: getFooterReducers,
  getProductDetails: getProductDetailReducer,
  getFilterProduct: getFilterReducer,
  getCart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
