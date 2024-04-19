import { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import ExpensesForm from './components/ExpensesForm';
import PieChart from './components/PieChart';
import axios from './api/axios';

function App() {
  const [expensesData, setExpensesData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ label: "Expenses", data: [], backgroundColor: [] }]
  });

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const fetchedExpenses = await axios.get('/api/expenses', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
        });
        console.log("Expenses fetched successfully");
        setExpensesData(fetchedExpenses.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchExpenses();
  }, []);

  useEffect(() => {

    // Aggregate expenses by category and calculate total amount for each category
    const aggregatedData = expensesData.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    const categories = Object.keys(aggregatedData);
    const totalAmounts = Object.values(aggregatedData);

    const retrievedChartData = {
      labels: categories,
      datasets: [{
        label: "Expenses",
        data: totalAmounts,
        backgroundColor: getRandomColors(categories.length)
      }]
    };
    setChartData(retrievedChartData);
  }, [expensesData]);

  const getRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random hexadecimal color
      colors.push(randomColor);
    }
    return colors;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="content">
        <div className="chart">
          <PieChart data={chartData} />
        </div>
        <div className="form">
          <ExpensesForm />
        </div>
        <div className="expenses">
          <Expenses expenses={expensesData} />
        </div>
      </div>
    </div>
  );
}

export default App;