import React, { useState } from "react";
import Form from "../Form/Form";
import { getUser } from "../../redux/user-reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handlePassword = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/expenses");
    dispatch(getUser(email, password));
  };

  const form = {
    title: "Вход",
    input: [
      {
        name: "email",
        type: "text",
        value: email,
        handle: (e) => handleEmail(e),
      },
      {
        name: "пароль",
        type: "password",
        value: password,
        handle: (e) => handlePassword(e),
      },
    ],
    button: "Войти",
    handleButton: (e) => handleButton(e),
    link: "/registration",
    linkName: "зарегистрироваться",
  };

  return (
    <div className="login">
      <Form form={form} />
    </div>
  );
}

export default Login;
