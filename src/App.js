import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { ThemeProvider } from "@rmwc/theme";
import { Sidebar } from "./components";
import { DrawerAppContent } from "@rmwc/drawer";
import { MultiCluster } from "./components";

// Includes all of material-components-web styles from the latest version
import "material-components-web/dist/material-components-web.min.css";

export default function App() {
  return (
    <ThemeProvider options={{ primary: "white", onSurface: "white" }} wrap>
      <React.Fragment>
        <Sidebar open={true} />
        <DrawerAppContent style={{ minHeight: "15rem", padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MultiCluster x={0.5} y={0.5} radius={0.7} open={true} />
          </div>
        </DrawerAppContent>
      </React.Fragment>
    </ThemeProvider>
  );
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  //const [open, setOpen] = React.useState(false);
  render() {
    return (
      <ThemeProvider options={{ primary: "white", onSurface: "white" }} wrap>
        <React.Fragment>
          <Sidebar open={true} />
          <DrawerAppContent style={{ minHeight: "15rem", padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            />
          </DrawerAppContent>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
