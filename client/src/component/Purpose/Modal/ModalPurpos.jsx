/* eslint-disable react/prop-types */
import React, { useState } from "react";
import close from "../../../assets/close";
import Form from "../../Form/Form";
import { useDispatch } from "react-redux";
import { createPurpose } from "../../../redux/purpose-reducer";

function ModalPurpos(props) {
  const { handleToggler, userId } = props;

  const [purpose, setPurpose] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handlePurpose = (e) => {
    const text = e.target.value;
    setPurpose(text);
  };

  const handlePrice = (e) => {
    const text = e.target.value;
    setPrice(text);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (purpose.length > 1 && price.length > 1) {
      dispatch(createPurpose(userId, purpose, price));
      handleToggler();
    } else {
      alert("введите данные");
    }
  };

  const form = {
    title: "Добавить цель",
    input: [
      {
        name: "Цель",
        type: "text",
        value: purpose,
        handle: (e) => handlePurpose(e),
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

export default ModalPurpos;
