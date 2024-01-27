import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import ExpenseBox from "./components/ExpenseBox";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <ExpenseBox />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </>
  );
}

export default App;
