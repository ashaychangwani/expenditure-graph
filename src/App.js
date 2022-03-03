import logo from './logo.svg';
import './App.css';

import Transactions from "./components/Transactions";
import Expense from "./classes/expense";
import Names from "./components/Names";


function App() {
  const [allNames, setAllNames] = useState([]);

  const handleOpenForm = () => {
    console.log("Form opened");
    setFlag(!false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;