/* eslint-disable react/prop-types */
import React, { useState } from "react";
import close from "../../assets/close.svg";
import Form from "../Form/Form";
import { creatIncome } from "../../redux/income-reducer";
import { useDispatch, useSelector } from "react-redux";

function ModalIncome(props) {
  const { handleToggler } = props;
  const [income, setIncome] = useState("");
  const [price, setPrice] = useState("");

  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const handleExpense = (e) => {
    const text = e.target.value;
    setIncome(text);
  };

  const handlePrice = (e) => {
    const text = e.target.value;
    setPrice(text);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (income.length > 2 && price.length > 1) {
      dispatch(creatIncome(user.id, income, price));
      handleToggler();
    } else {
      alert("введите данные");
    }
  };

  const form = {
    title: "Добавить затраты",
    input: [
      {
        name: "Доход",
        type: "text",
        value: income,
        handle: (e) => handleExpense(e),
      },
      {
        name: "Цена",
        type: "text",
        value: price,
        handle: (e) => handlePrice(e),
      },
    ],
    button: "создать",
    handleButton: (e) => handleButton(e),
  };

  return (
    <div className="modal_expenses">
      <div className="modal_expenses_content">
        <Form form={form} />
        <div className="modal_expenses_content_close" onClick={handleToggler}>
          <img src={close} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default ModalIncome;
