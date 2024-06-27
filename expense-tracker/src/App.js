import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
     
    </div>
  );
};

export default App;
