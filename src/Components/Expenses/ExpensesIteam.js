import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpensesIteam.css';
import Card from "../UI/Card";


function ExpenseIteam (props) {
 
    return (<Card className='expense-item'>
        <div>
            <ExpenseDate dat={props.date}/>

        </div>
         <div className='expense-item__description'>
             <h2>{props.titel}</h2>
         </div>
         <div className='expense-item__price'>
            {props.amount}
         </div>
         </Card>)
}

export default ExpenseIteam;