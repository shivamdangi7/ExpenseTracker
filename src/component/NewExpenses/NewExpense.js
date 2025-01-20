import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    //getting ExpenseData from ExpenseForm component as parameter
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [form, Handleform] = useState(false);
  const formhandler = () => {
    Handleform(true);
  };
  const stopformhandler = () => {
    Handleform(false);
  };
  let requiredact = <button onClick={formhandler}>Add New Expense</button>;
  if (form === true) {
    requiredact = (
      <ExpenseForm
        onSaveExpenseData={SaveExpenseDataHandler}
        onstop={stopformhandler}
      />
    );
  }
  return <div className="new-expense">{requiredact}</div>;
};
export default NewExpense;
