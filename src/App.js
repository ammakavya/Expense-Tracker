
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import SubmitPage from './components/SubmitPage';
import Transactions from './components/Transactions';

function App() {
  return (
    <div className="App">
     {/* <SubmitPage/> */}
     <Header/>
     <Balance/>
     <IncomeExpense />
     <br/>
     <History/>
     <Transactions/>
    </div>
  );
}

export default App;
