import React, { useContext } from 'react'
import { useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const{dispatch} =useContext(BudgetContext) ;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_EXPENSE', payload: { description, amount: parseFloat(amount) } });
    setDescription('');
    setAmount('');
  };



    
  return (
<form onSubmit={handleSubmit} className=' space-y-4 mt-4'>
<label className='block text-2xl mb-2'>Add Expense</label>
<input type="text"
placeholder='Discription'
className='input border p-2 w-5/6'
value={description}
onChange={(e) => setDescription(e.target.value)}

/>

<input type="number"
value={amount}
placeholder='Amount'
className='input border p-2 w-1/3 mr-5'
onChange={(e) => setAmount(e.target.value)}

 />

<button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded">Add Expense</button>


</form>  


)
}

export default ExpenseForm