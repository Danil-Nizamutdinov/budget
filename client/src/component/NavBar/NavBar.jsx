import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delUser } from "../../redux/user-reducer";

function NavBar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(delUser());
  };
  return (
    <header className="header">
      <nav className="header_nav">
        <NavLink className="link" to="/info">
          инфо
        </NavLink>
        <NavLink className="link" to="/income">
          Доходы
        </NavLink>
        <NavLink className="link" to="/expenses">
          Расходы
        </NavLink>
        <NavLink className="link" to="/purpose">
          Цели
        </NavLink>
        <NavLink onClick={logout} className="link" to="/login">
          Выйти
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
