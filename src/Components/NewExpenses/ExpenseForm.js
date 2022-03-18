import React,{useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm=(props)=>{

    const [enterdTitel,setEnterdTitel]=useState("");
    const [enterdAmount,setEnterdAmount]=useState("");
    const [enterdDate,setEnterdDate]=useState("");
    // const [userInput,setUserInput]=useState({
    //     changeTitel:"",
    //     changeAmount:'',
    //     changeDate:"",

    // })

    const changeTitelHandler=(event)=>{
        setEnterdTitel(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     changeTitel:event.target.value,
        // });
        // setUserInput((...prevState)=>{
        //     return {...prevState,changeTitel:event.target.value};
        // });

    };
    const changeAmountHandler=(event)=>{
        setEnterdAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //      changeAmount:event.target.value,

        // });
    };

    const changeDateHandler=(event)=>{
        setEnterdDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     changeDate:event.target.value,
        // });

    };
    const submitHandler=(event)=>{
                event.preventDefault();
                const expenseData={
                    titel:enterdTitel,
                    amount: +enterdAmount,
                    date: new Date(enterdDate),
                };
                props.onSaveExpenseData(expenseData);
                setEnterdTitel("");
                setEnterdAmount("");
                setEnterdDate("");
    }
    return(
        <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control label">
                    <label>Titel</label>
                    <input type="text" value={enterdTitel} onChange={changeTitelHandler} />
                </div>
                <div className="new-expense__control input">
                    <label>Amount</label>
                    <input type="number" min={1} step="0.01" value={enterdAmount} onChange={changeAmountHandler}/>
                </div>
  
                <div className=" new-expense__control input">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enterdDate} onChange={changeDateHandler} />
                </div>
            </div>
            <div className=" new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>

        </form>
      
        
        </div>
    )

};
export default ExpenseForm;
