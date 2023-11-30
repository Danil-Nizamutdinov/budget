import React, { useEffect, useState } from "react";
import close from "../../assets/close.svg";
import ModalExpenses from "./ModalExpenses";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpenses, getExpenses } from "../../redux/expenses-reducer";

function Expenses() {
  const [toggler, setToggler] = useState(false);

  const expenses = useSelector((state) => state.expensesReducer.expenses);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses(user.id));
  }, []);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  const handleDelete = (id) => {
    dispatch(deleteExpenses(user.id, id));
  };

  return (
    <section className="expenses">
      <div className="expenses_content">
        <div className="expenses_content_header">
          <h2>Общие затраты</h2>
        </div>
        <div className="expenses_content_body">
          {expenses.length > 0 ? (
            expenses.map((e) => (
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
      {toggler ? <ModalExpenses handleToggler={handleToggler} /> : ""}
    </section>
  );
}

export default Expenses;
