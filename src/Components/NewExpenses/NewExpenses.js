import react,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"
const NewExpenses=(props)=>{
    const[isEditing,setEditing]=useState(false);
    const saveExpenseDataHandler= (enterdExpenseData)=>{
        const expenseData={
            ...enterdExpenseData,
             id: Math.random().toString(),
             
        };

        props.onAddExpense(expenseData);
        setEditing(false);

    } 
const startEditingHandler=()=>{
    setEditing(true);
}
const stopEditingHandler=()=>{
    setEditing(false);
}

    return(
        <div className="new-expense">
            {!isEditing &&<button onClick={startEditingHandler}>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
};
export default NewExpenses;