import {
  ALL_BASIC_INFO_FAIL,
  ALL_BASIC_INFO_REQUEST,
  ALL_BASIC_INFO_SUCCESS,
  ALL_PROJECT_FAIL,
  ALL_PROJECT_REQUEST,
  ALL_PROJECT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_BASIC_INFO_FAIL,
  DELETE_BASIC_INFO_REQUEST,
  DELETE_BASIC_INFO_RESET,
  DELETE_BASIC_INFO_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_RESET,
  DELETE_PROJECT_SUCCESS,
  NEW_BASIC_INFO_FAIL,
  NEW_BASIC_INFO_REQUEST,
  NEW_BASIC_INFO_RESET,
  NEW_BASIC_INFO_SUCCESS,
  NEW_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_RESET,
  NEW_PROJECT_SUCCESS,
  PROJECT_BASIC_INFO_FAIL,
  PROJECT_BASIC_INFO_REQUEST,
  PROJECT_BASIC_INFO_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  UPDATE_BASIC_INFO_FAIL,
  UPDATE_BASIC_INFO_REQUEST,
  UPDATE_BASIC_INFO_RESET,
  UPDATE_BASIC_INFO_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_RESET,
  UPDATE_PROJECT_SUCCESS,
} from "../constants/projectConstant";

export const newProjectReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case NEW_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PROJECT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        project: action.payload.project,
      };
    case NEW_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PROJECT_RESET:
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

export const updateProject = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_PROJECT_FAIL:
    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PROJECT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_PROJECT_RESET:
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

export const projectDetailsReducer = (state = { myProject: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PROJECT_DETAILS_SUCCESS:
      return {
        loading: false,
        myProject: action.payload,
      };

    case PROJECT_DETAILS_FAIL:
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

export const projectReducer = (state = { myProject: [] }, action) => {
  switch (action.type) {
    case ALL_PROJECT_REQUEST:
      return {
        loading: true,
        myProject: [],
      };
    case ALL_PROJECT_SUCCESS:
      return {
        loading: false,
        myProject: action.payload,
      };

    case ALL_PROJECT_FAIL:
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
///INFO
export const newInfoReducer = (state = { information: {} }, action) => {
  switch (action.type) {
    case NEW_BASIC_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BASIC_INFO_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        information: action.payload.information,
      };
    case NEW_BASIC_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BASIC_INFO_RESET:
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

export const infoReducer = (state = { myInfo: [] }, action) => {
  switch (action.type) {
    case ALL_BASIC_INFO_REQUEST:
      return {
        loading: true,
        myInfo: [],
      };
    case ALL_BASIC_INFO_SUCCESS:
      return {
        loading: false,
        myInfo: action.payload,
      };

    case ALL_BASIC_INFO_FAIL:
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

export const updateBio = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BASIC_INFO_REQUEST:
    case DELETE_BASIC_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BASIC_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_BASIC_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_BASIC_INFO_FAIL:
    case DELETE_BASIC_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_BASIC_INFO_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case DELETE_BASIC_INFO_RESET:
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

export const infoDetailsReducer = (state = { myInfo: {} }, action) => {
  switch (action.type) {
    case PROJECT_BASIC_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PROJECT_BASIC_INFO_SUCCESS:
      return {
        loading: false,
        myInfo: action.payload,
      };

    case PROJECT_BASIC_INFO_FAIL:
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