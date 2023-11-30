import { purposeAPI, purposeItemAPI } from "../api/api";

const SET_PURPOSE = "SET_PURPOSE";
const ADD_PURPOSE = "ADD_PURPOSE";
const ADD_PURPOSE_ITEMS = "ADD_PURPOSE_ITEMS";

const initialState = {
  purposes: [],
};

const purposeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PURPOSE:
      return {
        ...state,
        purposes: Array.isArray(action.purposes) ? [...action.purposes] : [],
      };
    case ADD_PURPOSE:
      return {
        ...state,
        purposes: [...state.purposes, { ...action.newPurposes }],
      };
    case ADD_PURPOSE_ITEMS:
      return {
        ...state,
        purposes: state.purposes.map((purpose) => {
          if (purpose.id === action.purposeId) {
            return {
              ...purpose,
              purpose_items: [...purpose.purpose_items, action.newPurposesItem],
            };
          }
          return purpose;
        }),
      };

    default:
      return state;
  }
};

const setPurpose = (purposes) => ({ type: SET_PURPOSE, purposes });
const addPurpose = (newPurposes) => ({ type: ADD_PURPOSE, newPurposes });
const addPurposeItem = (newPurposesItem, purposeId) => ({
  type: ADD_PURPOSE_ITEMS,
  newPurposesItem,
  purposeId,
});

export const getPurpose = (userId) => {
  return async (dispatch) => {
    const res = await purposeAPI.getPurpose(userId);
    dispatch(setPurpose(res));
  };
};

export const createPurpose = (userId, name, price) => {
  return async (dispatch) => {
    const res = await purposeAPI.creatPurpose(userId, name, price);
    dispatch(addPurpose(res));
  };
};

export const createPurposeItem = (purposeId, name, price) => {
  return async (dispatch) => {
    const res = await purposeItemAPI.creatPurposeItem(purposeId, name, price);
    dispatch(addPurposeItem(res, purposeId));
  };
};

export const deletePurpose = (purposeId, userId) => {
  return async (dispatch) => {
    await purposeAPI.deletePurpose(purposeId);
    const res = await purposeAPI.getPurpose(userId);
    dispatch(setPurpose(res));
  };
};

export const deletePurposeItem = (purposeId, purposeItemId, userId) => {
  return async (dispatch) => {
    await purposeItemAPI.deletePurposeItem(purposeId, purposeItemId);
    const res = await purposeAPI.getPurpose(userId);
    dispatch(setPurpose(res));
  };
};

export default purposeReducer;
