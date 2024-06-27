import React from 'react';

const Summary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categorySummary = expenses.reduce((summary, expense) => {
    if (!summary[expense.category]) {
      summary[expense.category] = 0;
    }
    summary[expense.category] += expense.amount;
    return summary;
  }, {});

  return (
    <div>
      <h2>Summary</h2>
      <p>Total: ${total}</p>
      <ul>
        {Object.keys(categorySummary).map((category) => (
          <li key={category}>
            {category}: ${categorySummary[category]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;