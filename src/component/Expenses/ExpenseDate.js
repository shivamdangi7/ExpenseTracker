import Card from "../UI/Card";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  //helper constants
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    //outputting them
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}
export default ExpenseDate;
