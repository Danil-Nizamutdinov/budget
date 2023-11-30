import React, { useState } from "react";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/user-reducer";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const handlePassword = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const handlePassword2 = (e) => {
    const text = e.target.value;
    setPassword2(text);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (password === password2) {
      dispatch(createUser(email, password));
      navigate("/expenses");
    } else {
      console.log("пароли не совпадают");
    }
  };

  const form = {
    title: "Регистрация",
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
      {
        name: "пароль",
        type: "password",
        value: password2,
        handle: (e) => handlePassword2(e),
      },
    ],
    button: "зарегистрироваться",
    handleButton: (e) => handleButton(e),
    link: "/login",
    linkName: "войти",
  };

  return (
    <div className="login">
      <Form form={form} />
    </div>
  );
}

export default Registration;
