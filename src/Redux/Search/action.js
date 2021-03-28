import axios from "axios";
import {
  GET_SEARCH_FAILURE,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_VEDIO_FAILURE,
  GET_VEDIO_REQUEST,
  GET_VEDIO_SUCCESS,
} from "./actionTypes";
const getSearchRequest = (payload) => {
  return {
    type: GET_SEARCH_REQUEST,
    payload,
  };
};
const getSearchSuccess = (payload) => {
  return {
    type: GET_SEARCH_SUCCESS,
    payload,
  };
};
const getSearchFailure = (payload) => {
  return {
    type: GET_SEARCH_FAILURE,
    payload,
  };
};
const getVedioRequest = (payload) => {
  return {
    type: GET_VEDIO_REQUEST,
    payload,
  };
};
const getVedioSuccess = (payload) => {
  return {
    type: GET_VEDIO_SUCCESS,
    payload,
  };
};
const getVedioFailure = (payload) => {
  return {
    type: GET_VEDIO_FAILURE,
    payload,
  };
};
const getSearchFetchData = (payload) => (dispatch) => {
  dispatch(getSearchRequest());
  return axios
    .get(`https://bbc-db.herokuapp.com/news${payload}`)
    .then((res) => {
      dispatch(getSearchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSearchFailure());
    });
};
const getVedioFetchData = (payload) => (dispatch) => {
    dispatch(getVedioRequest());
    return axios
      .get(`https://bbc-db.herokuapp.com/reels`)
      .then((res) => {
        dispatch(getVedioSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getVedioFailure());
      });
  };
export {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure,
  getSearchFetchData,
  getVedioRequest,
  getVedioSuccess,
  getVedioFailure,
  getVedioFetchData
};
