import axios from "axios";

import * as actionType from "../constants/Constants";

const URL = "http://localhost:3001";
// Home Page  Action  Creators
export const getHomeAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/home`);
    dispatch({ type: actionType.GET_HOME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_HOME_FAIL, payload: error.message });
  }
};
// Similar Products  Action Creators
export const getProductsList = (productType) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL}/v1/allProducts/${productType}`);
    dispatch({
      type: actionType.GET_ALL_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_ALL_PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
// filter on similarProducts Action Creators
export const filterProducts =
  (productType, priceMin, priceMax, ratings) => async (dispatch) => {
    try {
      const requestData = {
        priceMin: priceMin,
        priceMax: priceMax,
        ratings: ratings,
      };
      const { data } = await axios.post(
        `${URL}/v1/allProducts/filterproducts/${productType}`,
        requestData
      );

      dispatch({
        type: actionType.GET_FILTER_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionType.GET_FILTER_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };
// productDetail Action Creators
export const getProductDetail = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/v1/productdetail/${product_id} `);
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
// Footer Action Creators
export const getFooter = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/footer`);
    dispatch({ type: actionType.GET_FOOTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.FOOTER_REQUEST_FAIL,
      payload: error.message,
    });
  }
};
// addToCart Action Creators
export const addCart =
  (quantity, Name, price, discount, cuttedPrice, product_id) =>
  async (dispatch) => {
    try {
      const cart_products = {
        quantity: quantity,
        Name: Name,
        price: price,
        discount: discount,
        cuttedPrice: cuttedPrice,
      };

      const { data } = await axios.post(
        `${URL}/product/cart/${product_id}`,
        cart_products
      );

      dispatch({
        type: actionType.ADD_TO_CART,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionType.ADD_TO_CART_FAIL,
        payload: error.message,
      });
    }
  };
