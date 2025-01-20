import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  //onChangeFilter prop is used here
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //here from expenses.js we are using onChangeFilter
  };
  //props.selected is a 2-way binding ka shikaar isme apan jo value le rhe hai vo Expenses.js se le rhe hai jabki event.target.value apan onChangefilter ke function ko de rhe hai jo Expenses.js mein hai hence hogaya na 2-way binding
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
