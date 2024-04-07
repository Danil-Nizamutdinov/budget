import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user-reducer";
import expensesReducer from "./expenses-reducer";
import purposeReducer from "./purpose-reducer";
import incomeReducer from "./income-reducer"

let state = combineReducers({
  userReducer,
  expensesReducer,
  purposeReducer,
  incomeReducer
});

let store = createStore(state, applyMiddleware(thunk));

export default store;
