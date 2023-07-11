import * as types from "./actionTypes";
import axios from "axios";

export const getProductRequest = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};
export const getProductSuccess = (payload) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload,
  };
};
export const getProductError = () => {
  return {
    type: types.GET_PRODUCT_FAILURE,
  };
};

export const getProducts = (params) => (dispatch) => {
  dispatch(getProductRequest());
  return axios
    .get(`https://json-server-vercel-drab.vercel.app/products`, params)
    .then((r) => {
      dispatch(getProductSuccess(r.data));
      
    })
    .catch((err) => dispatch(getProductError()));
};
