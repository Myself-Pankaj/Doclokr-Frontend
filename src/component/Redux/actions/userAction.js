import axios from "axios";
import {
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_ROLE_FAIL,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
} from "../constants/userConstant";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_REQUEST,
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Role
export const updateRole = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ROLE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${server}/user/${id}`, userData, config);

    dispatch({ type: UPDATE_ROLE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ROLE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };