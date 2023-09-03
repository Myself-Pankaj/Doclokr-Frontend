import {
  ALL_TXT_FILE_FAIL,
  ALL_TXT_FILE_REQUEST,
  ALL_TXT_FILE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_TXT_FILE_FAIL,
  DELETE_TXT_FILE_REQUEST,
  DELETE_TXT_FILE_RESET,
  DELETE_TXT_FILE_SUCCESS,
  NEW_TXT_FILE_FAIL,
  NEW_TXT_FILE_REQUEST,
  NEW_TXT_FILE_RESET,
  NEW_TXT_FILE_SUCCESS,
  TXT_FILE_DETAIL_FAIL,
  TXT_FILE_DETAIL_REQUEST,
  TXT_FILE_DETAIL_SUCCESS,
  UPDATE_TXT_FILE_FAIL,
  UPDATE_TXT_FILE_REQUEST,
  UPDATE_TXT_FILE_RESET,
  UPDATE_TXT_FILE_SUCCESS,
} from "../constants/textConstant";

export const addTxtFileReducer = (state = { textfile: {} }, action) => {
  switch (action.type) {
    case NEW_TXT_FILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_TXT_FILE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        textfile: action.payload.textfile,
      };
    case NEW_TXT_FILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_TXT_FILE_RESET:
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

export const showTextFile = (state = { mytextfile: [] }, action) => {
  switch (action.type) {
    case ALL_TXT_FILE_REQUEST:
      return {
        loading: true,
        mytextfile: [],
      };
    case ALL_TXT_FILE_SUCCESS:
      return {
        loading: false,
        mytextfile: action.payload,
      };

    case ALL_TXT_FILE_FAIL:
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

export const updatetxt = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TXT_FILE_REQUEST:
    case DELETE_TXT_FILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TXT_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_TXT_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_TXT_FILE_FAIL:
    case DELETE_TXT_FILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_TXT_FILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_TXT_FILE_RESET:
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

export const txtDetailsReducer = (state = { mytextfile: {} }, action) => {
  switch (action.type) {
    case TXT_FILE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TXT_FILE_DETAIL_SUCCESS:
      return {
        loading: false,
        mytextfile: action.payload,
      };

    case TXT_FILE_DETAIL_FAIL:
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
