import react,{useState} from "react";
import ExpensesList from "./ExpensesList";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
function ExpenseData(props){
    const [filteredYear,setFilteredYear]=useState("2020");

    const filterChangeHandler=(event)=>{
    
        setFilteredYear(event.target.value);
    }
    const filteredExpenses=props.item.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })

    return(
        <li>
        <Card className="expenses">
         <ExpenseFilter selected={filteredYear} filterChangeHandler={filterChangeHandler}/>
         <ExpenseChart expenses={filteredExpenses}/>
         <ExpensesList item={filteredExpenses}/>
          
        </Card>
        </li>
    )
};

export default ExpenseData;