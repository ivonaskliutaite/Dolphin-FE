import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
    return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" />
            <Route path="/Contacts" />
            <Route path="/About" />
            <Route path="/Sign up" />
        </Routes>
    </Router>
  );
}

export default App;
