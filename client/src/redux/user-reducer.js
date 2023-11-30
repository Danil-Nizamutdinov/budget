/* eslint-disable no-case-declarations */
import { userAPI } from "../api/api";

const SET_USER = "SET_USER";
const DEL_USER = "DEL_USER";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const newUser = { ...action.user };
      localStorage.setItem("user", JSON.stringify(newUser));
      return {
        ...state,
        user: newUser,
      };
    case DEL_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

const setUser = (user) => ({ type: SET_USER, user });

export const delUser = () => ({ type: DEL_USER });

export const createUser = (email, password) => {
  return async (dispatch) => {
    const res = await userAPI.registration(email, password);
    dispatch(setUser(res));
  };
};

export const getUser = (email, password) => {
  return async (dispatch) => {
    const res = await userAPI.login(email, password);
    dispatch(setUser(res));
  };
};

export default userReducer;
