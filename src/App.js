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
      <PieChart data={chartData} />
      <Expenses />
      <ExpensesForm />
    </div>
  );
}

export default App;
