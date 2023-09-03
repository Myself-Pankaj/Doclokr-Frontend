import {
  ALL_PUB_DOC_FAIL,
  ALL_PUB_DOC_REQUEST,
  ALL_PUB_DOC_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PUB_DOC_FAIL,
  DELETE_PUB_DOC_REQUEST,
  DELETE_PUB_DOC_RESET,
  DELETE_PUB_DOC_SUCCESS,
  NEW_PUB_DOC_FAIL,
  NEW_PUB_DOC_REQUEST,
  NEW_PUB_DOC_RESET,
  NEW_PUB_DOC_SUCCESS,
  PUB_DOC_DETAILS_FAIL,
  PUB_DOC_DETAILS_REQUEST,
  PUB_DOC_DETAILS_SUCCESS,
} from "../constants/publicDocConstant";

export const newPubDocReducer = (state = { publicDoc: {} }, action) => {
  switch (action.type) {
    case NEW_PUB_DOC_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PUB_DOC_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        publicDoc: action.payload.publicDoc,
      };
    case NEW_PUB_DOC_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PUB_DOC_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const docssReducer = (state = { myPublicDocs: [] }, action) => {
  switch (action.type) {
    case ALL_PUB_DOC_REQUEST:
      return {
        loading: true,
        myPublicDocs: [],
      };
    case ALL_PUB_DOC_SUCCESS:
      return {
        loading: false,
        myPublicDocs: action.payload,
      };

    case ALL_PUB_DOC_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const docDetailsReducer = (state = { publicDoc: {} }, action) => {
  switch (action.type) {
    case PUB_DOC_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PUB_DOC_DETAILS_SUCCESS:
      return {
        loading: false,
        publicDoc: action.payload,
      };

    case PUB_DOC_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const deleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PUB_DOC_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PUB_DOC_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_PUB_DOC_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PUB_DOC_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};