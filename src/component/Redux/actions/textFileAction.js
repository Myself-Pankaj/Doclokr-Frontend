import axios from "axios";
import {
  ALL_TXT_FILE_FAIL,
  ALL_TXT_FILE_REQUEST,
  ALL_TXT_FILE_SUCCESS,
  DELETE_TXT_FILE_FAIL,
  DELETE_TXT_FILE_REQUEST,
  DELETE_TXT_FILE_SUCCESS,
  NEW_TXT_FILE_FAIL,
  NEW_TXT_FILE_REQUEST,
  NEW_TXT_FILE_SUCCESS,
  TXT_FILE_DETAIL_FAIL,
  TXT_FILE_DETAIL_REQUEST,
  TXT_FILE_DETAIL_SUCCESS,
  UPDATE_TXT_FILE_FAIL,
  UPDATE_TXT_FILE_REQUEST,
  UPDATE_TXT_FILE_SUCCESS,
} from "../constants/textConstant";
import { server } from "../store";

export const addTextFile = (txtData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_TXT_FILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(`${server}/addtxt`, txtData, config);
    dispatch({
      type: NEW_TXT_FILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_TXT_FILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const showTextFile = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TXT_FILE_REQUEST });

    const { data } = await axios.get(`${server}/txt`, {
      withCredentials: true,
    });

    dispatch({ type: ALL_TXT_FILE_SUCCESS, payload: data.mytextfile });
  } catch (error) {
    dispatch({ type: ALL_TXT_FILE_FAIL, payload: error.response.data.message });
  }
};

export const gettxtDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TXT_FILE_DETAIL_REQUEST });

    const { data } = await axios.get(`${server}/txt/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: TXT_FILE_DETAIL_SUCCESS, payload: data.mytextfile });
  } catch (error) {
    dispatch({
      type: TXT_FILE_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deletetxtFile = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TXT_FILE_REQUEST });

    const { data } = await axios.delete(`${server}/txt/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: DELETE_TXT_FILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TXT_FILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update
export const updateTxtFile = (id, newData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TXT_FILE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/txt/${id}`, newData, config);

    dispatch({ type: UPDATE_TXT_FILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_TXT_FILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
