/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import NavBar from "./component/NavBar/NavBar";
import Expenses from "./component/Expenses/Expenses";
import withAuthCheck from "./hoc/hoc";
import { useSelector } from "react-redux";
import Purpose from "./component/Purpose/Purpose";

function App() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="container">
      {user.id ? <NavBar /> : ""}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="expenses" element={withAuthCheck(Expenses)} />
        <Route path="purpose" element={withAuthCheck(Purpose)} />
      </Routes>
    </div>
  );
}

export default App;
