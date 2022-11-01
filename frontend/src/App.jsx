import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./context/DataProvider";
import "boxicons";


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Paginas />
      </Router>
    </div>
    </DataProvider> 
  );
}

export default App;
