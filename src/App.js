//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

import React, { useState } from "react";
import Alert from "./components/Alert";
// import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";  //npm install react-router-dom@5.2.0 from this

function App() {
  const [mode, setMode] = useState("light");
  const toggleState = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode is enelebed", "success");
      document.title = "Textutils - Darkmode";

      setInterval(() => {
        document.title = "Textutils - is Amazaing "; //favicon generator website is used to make title pictures
      }, 1500);
      setInterval(() => {
        document.title = "Textutils - install now hurry up ";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enelebed", "success");
      document.title = "Textutils - Lightmode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          about="About us"
          mode={mode} 
          toggleState={toggleState}
        />

        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForms
                showAlert={showAlert}
                heading="enter the message"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
