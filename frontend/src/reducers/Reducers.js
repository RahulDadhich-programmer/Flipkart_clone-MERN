import * as actionType from "../constants/Constants";
// Home reducer --> to store Category,Banner,Products
export const getHomeReducers = (state = { Home: [] }, action) => {
  switch (action.type) {
    case actionType.GET_HOME_SUCCESS:
      return {
        home: action.payload,
      };
    case actionType.GET_HOME_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

// Similar Product Reducer --> to Store similar products
export const getProductListReducers = (
  state = { SimilarProducts: [] },
  action
) => {
  switch (action.type) {
    case actionType.GET_ALL_PRODUCT_LIST_SUCCESS:
      return { SimilarProducts: action.payload };
    case actionType.GET_ALL_PRODUCT_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

// Footer Reducer --> to store Footer  data
export const getFooterReducers = (state = { footer: [] }, action) => {
  switch (action.type) {
    case actionType.GET_FOOTER_SUCCESS:
      return {
        footer: action.payload.footer,
      };
    case actionType.FOOTER_REQUEST_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
// ProductDetail Reducer --> to store  product detail page  data
export const getProductDetailReducer = (
  state = { productDetail: {}, loading: false, error: null },
  action
) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, productDetail: action.payload, loading: false };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
// Filter Reducer --> to store Filtered Data from Similar Product page
export const getFilterReducer = (state = { Filter: [] }, action) => {
  switch (action.type) {
    case actionType.GET_FILTER_PRODUCT_SUCCESS:
      return { Filter: action.payload };
    case actionType.GET_FILTER_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
// cart reducer --> to store Cart Data
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return { ...state, cartItems: action.payload };
    case actionType.REMOVE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
