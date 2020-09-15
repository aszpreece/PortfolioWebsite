import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <div className="Main">
          <Page></Page>
          <Page></Page>
          <Page></Page>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
