import React, { useState } from 'react';

const ExpenseForm = ({addEspense}) => {
    const[tittle , setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDafault();
        addExpense({id: Date.now(), tittle, amount: parseFloat(amount), category});
        setTittle('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Tittle"
            value={"title"}
            onChange={(e) => setTitle(e.target.value)}
            required

            />
       <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;