import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/MainComponent";

function App()
{
 return(
    <Router>
      <Main></Main>    
    </Router>
  )
}
export default App;
