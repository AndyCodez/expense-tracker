import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import ExpensesForm from './components/ExpensesForm';
import PieChart from './components/PieChart';
import { expensesData } from './constants/data';

function App() {
  const [chartData, setChartData] = useState(
    {
      labels: expensesData.map((data) => data.category),
      datasets: [
        {
          label: "Expenses",
          data: expensesData.map((data) => data.amount),
        },
      ],
    }
  )

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
