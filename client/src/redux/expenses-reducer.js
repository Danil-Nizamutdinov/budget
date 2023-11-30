import { expensesAPI } from "../api/api";

const SET_EXPENSES = "SET_EXPENSES";
const ADD_EXPENSE = "ADD_EXPENSE";

const initialState = {
  expenses: [],
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENSES:
      return {
        ...state,
        expenses: Array.isArray(action.expenses) ? [...action.expenses] : [],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, { ...action.expense }],
      };
    default:
      return state;
  }
};

const setExpenses = (expenses) => ({ type: SET_EXPENSES, expenses });
const addExpenses = (expense) => ({ type: ADD_EXPENSE, expense });

export const getExpenses = (userId) => {
  return async (dispatch) => {
    const res = await expensesAPI.getExpenses(userId);
    dispatch(setExpenses(res));
  };
};

export const creatExpenses = (userId, name, price) => {
  return async (dispatch) => {
    const res = await expensesAPI.creatExpenses(userId, name, price);
    dispatch(addExpenses(res));
  };
};

export const deleteExpenses = (userId, id) => {
  return async (dispatch) => {
    await expensesAPI.deleteExpenses(userId, id);
    const res2 = await expensesAPI.getExpenses(userId);
    dispatch(setExpenses(res2));
  };
};

export default expensesReducer;
