import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [FilteredYear, SetFilteredYear] = useState("2023");
  const FilterChangeHandler = (selectedYear) => {
    //selectedYear is nothing but event.target.value from the ExpenseFilter component
    // console.log('Expense.js');
    // console.log(selectedYear);
    SetFilteredYear(selectedYear);
  };
  // const FilteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === FilteredYear;
  // }); //bhai ye chij na jo dropdown karne par year change ho rha hai uske according apan ko apana element provide kiya ja rha hai
  const FilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  }); //getFullYear will give the full year object that we have inputted and then we wnat it to be converted into string as FilteredYear is a String ie 2023;
  // conditional statement another method

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={FilteredYear} //2-way binding ka shikaar
          onChangeFilter={FilterChangeHandler}
        />
        <ExpensesChart expenses={FilteredExpense} />
        {/* using conditional content so as to render a message for empty lists */}
        <ExpensesList items={FilteredExpense} />
      </Card>
    </li>
  );
}
export default Expenses;
