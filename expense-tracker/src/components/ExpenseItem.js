import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <li>
      <span>{expense.title} - ${expense.amount} ({expense.category})</span>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
