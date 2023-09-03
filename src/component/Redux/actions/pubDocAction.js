import axios from "axios";
import {
  ALL_PUB_DOC_FAIL,
  ALL_PUB_DOC_REQUEST,
  ALL_PUB_DOC_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PUB_DOC_FAIL,
  DELETE_PUB_DOC_REQUEST,
  DELETE_PUB_DOC_SUCCESS,
  NEW_PUB_DOC_FAIL,
  NEW_PUB_DOC_REQUEST,
  NEW_PUB_DOC_SUCCESS,
  PUB_DOC_DETAILS_FAIL,
  PUB_DOC_DETAILS_REQUEST,
  PUB_DOC_DETAILS_SUCCESS,
} from "../constants/publicDocConstant";
import { server } from "../store";

// Create
export const addPubDoc = (pubDocData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PUB_DOC_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/createdoc`,
      pubDocData,
      config
    );

    dispatch({
      type: NEW_PUB_DOC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PUB_DOC_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getMyDocs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PUB_DOC_REQUEST });
    
    const { data } = await axios.get(`${server}/mydocs`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_PUB_DOC_SUCCESS, payload: data.myPublicDocs });
  } catch (error) {
    dispatch({ type: ALL_PUB_DOC_FAIL, payload: error.response.data.message });
  }
};

export const getDocDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PUB_DOC_DETAILS_REQUEST });

    const { data } = await axios.get(`${server}/mydocs/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: PUB_DOC_DETAILS_SUCCESS, payload: data.publicDoc });
  } catch (error) {
    dispatch({
      type: PUB_DOC_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete
export const deleteDoc = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PUB_DOC_REQUEST });

    const { data } = await axios.delete(`${server}/mydocs/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_PUB_DOC_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PUB_DOC_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
