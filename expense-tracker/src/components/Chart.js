import React from 'react'; 
import { Pie } from 'react-chartjs-2'; // Import the Pie chart component from react-chartjs-2
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'; // Import necessary components from Chart.js

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expenses }) => {
  // Extract unique categories from the expenses array
  const categories = [...new Set(expenses.map(expense => expense.category))];

  // Calculate the total expense for each category
  const data = categories.map(category => {
    return expenses
      .filter(expense => expense.category === category) // Filter expenses by category
      .reduce((sum, expense) => sum + expense.amount, 0); // Sum the amounts of expenses in each category
  });

  return (
    <div>
      <h2>Expenses Chart</h2>
      <Pie
        data={{
          labels: categories, // Set the labels for the Pie chart to the unique categories
          datasets: [
            {
              data: data, // Set the data for the Pie chart to the total expenses per category
              backgroundColor: [ // Set the background colors for each slice of the Pie chart
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

export default Chart; // Export the Chart component as default
