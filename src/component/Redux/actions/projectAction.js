import axios from "axios";
import { server } from "../store";
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
  DELETE_BASIC_INFO_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  NEW_BASIC_INFO_FAIL,
  NEW_BASIC_INFO_REQUEST,
  NEW_BASIC_INFO_SUCCESS,
  NEW_PROJECT_FAIL,
  NEW_PROJECT_REQUEST,
  NEW_PROJECT_SUCCESS,
  PROJECT_BASIC_INFO_FAIL,
  PROJECT_BASIC_INFO_REQUEST,
  PROJECT_BASIC_INFO_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  UPDATE_BASIC_INFO_FAIL,
  UPDATE_BASIC_INFO_REQUEST,
  UPDATE_BASIC_INFO_SUCCESS,
  UPDATE_PROJECT_FAIL,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
} from "../constants/projectConstant";

//CREATE

export const addProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PROJECT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/project`, projectData, config);

    dispatch({
      type: NEW_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getMyInfos = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PROJECT_REQUEST });

    const { data } = await axios.get(`${server}/myproject`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_PROJECT_SUCCESS, payload: data.myProject });
  } catch (error) {
    dispatch({ type: ALL_PROJECT_FAIL, payload: error.response.data.message });
  }
};

///CREATE INFO
export const addInfo = (infoData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BASIC_INFO_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(`${server}/info`, infoData, config);

    dispatch({
      type: NEW_BASIC_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAboutMe = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BASIC_INFO_REQUEST });

    const { data } = await axios.get(`${server}/myinfo`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_BASIC_INFO_SUCCESS, payload: data.myInfo });
  } catch (error) {
    dispatch({ type: ALL_BASIC_INFO_FAIL, payload: error.response.data.message });
  }
};

export const getDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_BASIC_INFO_REQUEST });

    const { data } = await axios.get(`${server}/myinfo/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: PROJECT_BASIC_INFO_SUCCESS, payload: data.myInfo });
  } catch (error) {
    dispatch({
      type: PROJECT_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Delete
export const deleteInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BASIC_INFO_REQUEST });

    const { data } = await axios.delete(`${server}/delete/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_BASIC_INFO_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Insta
export const updateInsta = (id, newInsta) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BASIC_INFO_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/updateInsta/${id}`, newInsta, config);

    dispatch({ type: UPDATE_BASIC_INFO_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Project Name #
export const updateProjectName = (id, newInfo) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BASIC_INFO_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/updateProject/${id}`, newInfo, config);

    dispatch({ type: UPDATE_BASIC_INFO_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Accessing Link #
export const updateAccessingLink = (id, newLink) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BASIC_INFO_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/updateAccessingLink/${id}`, newLink, config);

    dispatch({ type: UPDATE_BASIC_INFO_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_BASIC_INFO_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Project Detail
export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`${server}/myproject/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data.myProject });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Update Project 
export const updateProject = (id, newone) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/info/${id}`, newone, config);

    dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    const { data } = await axios.delete(`${server}/remove/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
