import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Info() {
  const [totalPriceIncome, setTotalPriceIncome] = useState(0)
  const [totalPriceExpenses, setTotalPriceExpenses] = useState(0)

  const income = useSelector((state) => state.incomeReducer.income);
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  const purpose = useSelector((state) => state.purposeReducer.purposes);

  const addition = () => {
    let x = expenses.reduce((acc, current) => acc + current.price, 0)
    let y = purpose.map(p => p.purpose_items.reduce((acc, current) => acc + current.price, 0))
    let z = y.reduce((acc, current) => acc + current, 0)

    return x + z
  }

  useEffect(() => {
    setTotalPriceIncome(income.reduce((acc, current) => acc + current.price, 0))
    setTotalPriceExpenses(addition())
  }, [income], [expenses], [purpose])

  return (
    <div className="info">
        <div className="info_box">
          <div>
            <h2 className="titele_info">Доход в месяц - {totalPriceIncome}р</h2>
          </div>
          <div>
            <h2 className="titele_info">Затраты в месяц - {totalPriceExpenses}р</h2>
          </div>
          <div>
            <h2 className="titele_info">Остаток - {totalPriceIncome - totalPriceExpenses}р</h2>
          </div>
        </div>
        <div className="info_box">
          <h2>Цели</h2>
          {purpose.map((p, index) => (
            <div className="info_content_box" key={index}>
              цель {p.name},
              стоимость {p.price}р,
              в месяц {p.purpose_items.reduce((acc, current) => acc + current.price, 0)}р,             
            </div>
          ))}
        </div>
    </div>
  );
}

export default Info;
