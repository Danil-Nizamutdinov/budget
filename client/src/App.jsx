/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import NavBar from "./component/NavBar/NavBar";
import Expenses from "./component/Expenses/Expenses";
import withAuthCheck from "./hoc/hoc";
import { useDispatch, useSelector } from "react-redux";
import Purpose from "./component/Purpose/Purpose";
import Income from "./component/Income/Income";
import Info from "./component/Info/Info";
import { getIncome } from "./redux/income-reducer";
import { getExpenses } from "./redux/expenses-reducer";
import { getPurpose } from "./redux/purpose-reducer";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    console.log('sadads')
    dispatch(getIncome(user.id));
    dispatch(getExpenses(user.id));
    dispatch(getPurpose(user.id));
  }, [])

  return (
    <div className="container">
      {user.id ? <NavBar /> : ""}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="expenses" element={withAuthCheck(Expenses)} />
        <Route path="purpose" element={withAuthCheck(Purpose)} />
        <Route path="income" element={withAuthCheck(Income)} />
        <Route path="info" element={withAuthCheck(Info)} />
      </Routes>
    </div>
  );
}

export default App;
