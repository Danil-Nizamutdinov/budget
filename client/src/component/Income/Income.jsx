import React, { useEffect, useState } from "react";
import close from "../../assets/close.svg";
import ModalIncome from "./ModalIncome";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome, getIncome } from "../../redux/income-reducer";

function Expenses() {
  const [toggler, setToggler] = useState(false);

  const income = useSelector((state) => state.incomeReducer.income);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const handleToggler = () => {
    setToggler(!toggler);
  };

  const handleDelete = (id) => {
    dispatch(deleteIncome(user.id, id));
  };

  return (
    <section className="expenses">
      <div className="expenses_content">
        <div className="expenses_content_header">
          <h2>Общие доходы</h2>
        </div>
        <div className="expenses_content_body">
          {income.length > 0 ? (
            income.map((e) => (
              <div className="expenses_content_body_item" key={e.id}>
                <div>{e.name}</div>
                <div className="expenses_content_body_item_right">
                  <div>{e.price} рублей</div>
                  <div
                    className="expenses_content_body_item_delete"
                    onClick={() => handleDelete(e.id)}
                  >
                    <img src={close} alt="close" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span style={{ color: "#ffff" }}>пока что тут пусто</span>
          )}
        </div>
        <div className="expenses_content_footer">
          <button onClick={handleToggler}>добавить</button>
        </div>
      </div>
      {toggler ? <ModalIncome handleToggler={handleToggler} /> : ""}
    </section>
  );
}

export default Expenses;
