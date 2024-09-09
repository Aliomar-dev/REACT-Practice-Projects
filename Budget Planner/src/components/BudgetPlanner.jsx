import React, {  useContext, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";

const BudgetPlanner = () => {
  const [budget, setBudget] = useState("");
const {state, dispatch} = useContext(BudgetContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BUDGET', payload: parseFloat(budget) });
    setBudget('');
  };

  const totalExpenses = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);


  return (
    <div>
      <div className="text-center mx-auto font-medium text-3xl mb-4">
        BudgetPlanner
      </div>
      <form   onSubmit={handleSubmit}  className="flex justify-center gap-3 mb-8">
        <input
          value={budget}
          placeholder="Enter your Budget :"
          type="number"
          className="input border p-2 ml-2 w-2/3"
          onChange={(e) => setBudget(e.target.value)}

        />
        <button
          type="submit"
          className="btn  bg-blue-500 hover:bg-blue-600 text-white px-6 rounded"
        >
          Set Budget
        </button>
      </form>
      <div className="flex justify-evenly text-2xl gap-32 ">
        <p className="bg-[#ade4fc] py-1 px-2"> Budget : {state.budget} </p>
        <p className="bg-[#ade4fc] py-1 px-2 "> Remaining : {state.budget - totalExpenses}</p>
        <p className="bg-[#ade4fc] py-1 px-2"> Spent so far :  {totalExpenses} </p>
      </div>
    </div>
  );
};

export default BudgetPlanner;

