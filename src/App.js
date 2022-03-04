import logo from './logo.svg';
import './App.css';

import Transactions from "./components/Transactions";
import { Grid } from "@material-ui/core";
import Names from "./components/Names";



function App() {
  const [allNames, setAllNames] = useState([]);
  const [inputGraphData, setInputGraphData] = useState({});
  const [inputGraphConfig, setInputGraphConfig] = useState({});
  const [items, setItems] = useState([]);

  const handleOpenForm = () => {
    console.log("Form opened");
    setFlag(!false);
  };
  return (
    <div style={{ margin: "auto" }}>
    <Names
      flag={flag}
      handleOpenForm={handleOpenForm}
      allNames={allNames}
      setAllNames={setAllNames}
    />
      {flag ? (
        <Grid container>
          <Transactions
            flag={flag}
            allNames={allNames}
            items={items}
            setItems={setItems}
            inputGraphConfig={inputGraphConfig}
            inputGraphData={inputGraphData}
            setInputGraphConfig={setInputGraphConfig}
            setInputGraphData={setInputGraphData}
          />
          <Graph
            inputGraphConfig={inputGraphConfig}
            GraphData={inputGraphData}
            GraphHeader="Transactions Graph"
          />
        </Grid>
      ) : null}
    </div>
  );
}

export default App;