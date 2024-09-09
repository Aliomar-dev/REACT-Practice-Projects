import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseList = () => {
  const { state, dispatch } = useContext(BudgetContext);

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: index,
    });
  };

  return (
    <div>
      <h2 className="mt-8 text-lg">Expense List</h2>
      <ul>
        {state.expenses.map((expenses, index) => (
          <li className="p-2 w-5/6 flex justify-between items-center">
            <span>{index + 1} </span>
            <span>
              {expenses.description} : RS {expenses.amount}
            </span>
            <button
              onClick={() => handleDelete(index)}
              className="btn bg-red-500 text-white px-1 font-bold rounded hover:bg-red-700"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
