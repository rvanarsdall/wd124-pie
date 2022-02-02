import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  const [token, setToken] = useState("");

  //TODO: create a function that will update the state of token / update local storage.

  const updateLocalStorage = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  //TODO: utilize a hook called useEffect to check if we have token on page load - and if we do update the state of token

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Auth updateLocalStorage={updateLocalStorage} />
    </div>
  );
};

export default App;
