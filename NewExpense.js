import React from 'react';

import ExpenseForm from'./ExpenseForm';
import './NewExpense.css';

const NewExpense = () =>{
 return <div className="new-expense">
     <from>
    <ExpenseForm/>
     </from>
 </div>
};
export default NewExpense;