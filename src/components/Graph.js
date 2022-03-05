import { Grid } from "@material-ui/core";
import { Graph as ReactGraph} from "react-d3-graph";
// import {config} from "../utils/graphConfig"
const Graph = ({ graphData, graphHeader, graphConfig }) => {

  return (
    <Grid item xs={12} md={6}>
      {Object.keys(graphData).length && Object.keys(graphConfig).length ? (
        <>
          <h4>{graphHeader}</h4>
          <ReactGraph
            id="graph-id-output" // id is mandatory
            data={graphData}
            config={graphConfig}
          />
        </>
      ) : null}
    </Grid>
  );
};

export default Graph;
