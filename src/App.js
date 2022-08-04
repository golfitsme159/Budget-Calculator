import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initiaExpenses = [
  { id: uuidv4(), charge: "ค่าเช่าห้อง", amount: 1600 },
  { id: uuidv4(), charge: "ค่าเช่ารถ", amount: 1000 },
  { id: uuidv4(), charge: "ค่าบัตร", amount: 400 },
];
console.log(initiaExpenses);

function App() {
  const [expenses, setExpenses] = useState(initiaExpenses);

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending : <span className="total">
          ${expenses.reduce((acc,curr)=>{
            return (acc += curr.amount);
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
