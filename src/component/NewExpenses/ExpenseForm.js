import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //expecting the onSaveExpenseData prop
  const [EnteredTitle, setEnteredTitle] = useState("");
  //hamesha useState ke andar string dalte hai kyuki target.value hamesha string mein store hoti hai

  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  //multi state slices to one state slice
  const [userInput, setuserInput] = useState({
    EnteredTitle: "",
    EnteredAmount: "",
    EnteredDate: "",
  });

  // document.getElementById().addEventListener('click', () => {})
  //usually we call for input in vanilla js like the above
  const titlechangeHandler = (event) => {
    //   //event automatically aata hai in cour handler function anf target aur value properties hoti hai of the thing that we want to change
    //   //target maane input tag kyuki usimein apna handler onchange dala hua hai
    //   //value maane jo chij apan likh rhe in title block
    setEnteredTitle(event.target.value);
    //   setuserInput({
    //     ...userInput,
    //     EnteredTitle: event.target.value,
    //   });
  };
  // const titlechangeHandler = (event) => {
  //   setuserInput((prevState) => {
  //     return { ...prevState, EnteredTitle: event.target.value };
  //   });
  // };
  const AmountchangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //   setuserInput({
    //     ...userInput,
    //     EnteredAmount: event.target.value,
    //   });
  };
  // const AmountchangeHandler = (event) => {
  //   setuserInput((prevState) => {
  //     return { ...prevState, EnteredAmount: event.target.value };
  //   });
  // };
  const datechangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //   setuserInput({
    //     ...userInput,
    //     EnteredDate: event.target.value,
    //   });
  };
  // const datechangeHandler = (event) => {
  //   setuserInput((prevState) => {
  //     return { ...prevState, EnteredAmount: event.target.value };
  //   });
  // };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={AmountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={EnteredDate}
            onChange={datechangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onstop}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
