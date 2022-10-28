import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/Paginas";
import "boxicons";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Paginas />
      </Router>
    </div>
  );
}

export default App;
