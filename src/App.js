import './App.css';
import BarChart from './components/BarChart';
import Expenses from './components/Expenses';
import ExpensesForm from './components/ExpensesForm';

function App() {
  return (
    <div className="App">
      <BarChart />
      <Expenses />
      <ExpensesForm />
    </div>
  );
}

export default App;
