import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Graph from "./components/Graph";
import Names from "./components/Names";
import Transactions from "./components/Transactions";
import TransactionTable from "./components/TransactionTable";


function App() {
  const [allNames, setAllNames] = useState([]);
  const [inputGraphData, setInputGraphData] = useState({});
  const [inputGraphConfig, setInputGraphConfig] = useState({});
  const [items, setItems] = useState([]);
  const [outputList, setOutputList] = useState([]);
  const [outputGraphData, setOutputGraphData] = useState({});
  
  const handleOpenForm = () => {
    if (allNames.length > 1) {
      setFlag(!false);
    }
    else {
      alert("Atleast two people must be entered.")
    }
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
                <>
                <Grid container>
                  <Transactions
                    flag={flag}
                    allNames={allNames}
                    items={items}
                    setItems={setItems}
                    inputGraphData={inputGraphData}
                    setInputGraphData={setInputGraphData}
                    setOutputList={setOutputList}
                    setOutputGraphData={setOutputGraphData}
                  />
                  <Graph
                    graphData={inputGraphData}
                    graphHeader="Transactions Graph"
                  />
                </Grid>
                {outputList && outputList.length ? (
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <TransactionTable isInput={false} items={outputList} />
                    </Grid>
                    <Graph
                      graphData={outputGraphData}
                      graphHeader={"Simplified Graph"}
                    />
                  </Grid>
                ) : null}
              </>
            ) : null}
          </div>
        );
}
export default App;