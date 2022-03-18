import react from "react";
import ExpenseIteam from "./ExpensesIteam";
import "./ExpensesList.css"
const ExpensesList=props=>{


    if(props.item.length===0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
 return <ul className="expenses-list">
{
    props.item.map((expense)=>( <ExpenseIteam 
        key={expense.id}
        titel={expense.titel}
        amount={expense.amount}
        date={expense.date}/>))
}
 </ul>
};
export default ExpensesList;