import { incomeAPI } from "../api/api"; 

const SET_INCOME = "SET_INCOME";
const ADD_INCOME = "ADD_INCOME";

const initialState = {
  income: [],
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCOME:
      return {
        ...state,
        income: Array.isArray(action.income) ? [...action.income] : [],
      };
    case ADD_INCOME:
      return {
        ...state,
        income: [...state.income, { ...action.income }],
      };
    default:
      return state;
  }
};

const setIncome = (income) => ({ type: SET_INCOME, income });
const addIncome = (income) => ({ type: ADD_INCOME, income });

export const getIncome = (userId) => {
  return async (dispatch) => {
    const res = await incomeAPI.getIncome(userId);
    dispatch(setIncome(res));
  };
};

export const creatIncome = (userId, name, price) => {
  return async (dispatch) => {
    const res = await incomeAPI.creatIncome(userId, name, price);
    dispatch(addIncome(res));
  };
};

export const deleteIncome = (userId, id) => {
  return async (dispatch) => {
    await incomeAPI.deleteIncome(userId, id);
    const res2 = await incomeAPI.getIncome(userId);
    dispatch(setIncome(res2));
  };
};

export default incomeReducer;
