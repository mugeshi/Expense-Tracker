import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expenses }) => {
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const data = categories.map(category => {
    return expenses
      .filter(expense => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0);
  });

  return (
    <div>
      <h2>Expenses Chart</h2>
      <Pie
        data={{
          labels: categories,
          datasets: [
            {
              data: data,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40'
              ]
            }
          ]
        }}
      />
    </div>
  );
};

export default Chart;