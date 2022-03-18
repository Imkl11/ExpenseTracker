
import react,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Expenses/ExpensesIteam';
import ExpenseData from './Components/Expenses/ExpenseData';
import NewExpenses from './Components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES=[
  {
    id:"e1",
    titel: " Car insurance",
    amount: 900,
    date: new Date(2021,1,11),
  },
  {
    id:"e2",
    titel: " Life insurance",
    amount: 500,
    date: new Date(2019,2,13),
  },
{
  id:"e3",
    titel: " Grocery",
    amount: 100,
    date: new Date(2021,4,16),
},
{
  id:"e4",
    titel: "Bike repair",
    amount: 300,
    date: new Date(2021,5,18),
}
];

function App() {
  
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler= expense=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    })
  }

  return (<div>
     <NewExpenses onAddExpense={addExpenseHandler}/>
    <div className="App">
      <ExpenseData item={expenses}/>
      
      

    </div>
  </div>
   
  );
}

export default App;
