import React from "react";
import Item from "./ExpenseItem";

export const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <ul className="list">
        {expenses.map(() => {
          return <Item key={expenses.id} expenses={expenses} />;
        })}
      </ul>
      {expenses.length > 0 && <button className="btn">clear expenses</button>}
    </div>
  );
};

export default ExpenseList;
