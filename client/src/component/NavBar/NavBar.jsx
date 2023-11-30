import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delUser } from "../../redux/user-reducer";

function NavBar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(delUser());
  };
  return (
    <header className="header">
      <nav className="header_nav">
        <Link className="link" to="/income">
          Доходы
        </Link>
        <Link className="link" to="/expenses">
          Расходы
        </Link>
        <Link className="link" to="/purpose">
          Цели
        </Link>
        <Link onClick={logout} className="link" to="/login">
          Выйти
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
