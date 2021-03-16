import {
  GET_SEARCH_FAILURE,
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_VEDIO_REQUEST,
  GET_VEDIO_SUCCESS,
  GET_VEDIO_FAILURE
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  searchList: [],
  vedioList: [],
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_SEARCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        searchList: payload,
      };
    }
    case GET_SEARCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_VEDIO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_VEDIO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        vedioList: payload,
      };
    }
    case GET_VEDIO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer };
