// to write component we have to just write a function u know its a special function given what it returns
/* u can also write this ExpenseDate tag as a self closing tag like this <ExpenseDate/> same goes for ExpenseItem if there is nothing in between them */
// import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
//ctrl+click to see exported function
function ExpenseItem(props) {
  //to check for each instance evaluation occurance
  //state is seperated on a per component instance basis
  // console.log("expenseItem is evaluated");
  // // using state to re-evaluate the component for the particular satate change
  // const [title, settitle] = useState(props.title);
  // //why using const eventhough we are changing the title value
  // //well using a const is fine because we are updating the vlaue by calling the function
  // //function click handler
  // const clickhandler = () => {
  //   settitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
