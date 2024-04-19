import { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import ExpensesForm from './components/ExpensesForm';
import PieChart from './components/PieChart';
import axios from './api/axios';
import { backgroundColors } from './constants/data';

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
        backgroundColor: backgroundColors
      }]
    };
    setChartData(retrievedChartData);
  }, [expensesData]);

  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="content">
        <div className="form">
          <ExpensesForm />
        </div>
        {expensesData.length > 0 &&
          <div className="chart">
            <PieChart data={chartData} />
          </div>
        }
        <div className="expenses">
          {expensesData.length > 0 && <Expenses expenses={expensesData} />}
        </div>
      </div>
    </div>
  );
}

export default App;