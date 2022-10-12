import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";

const App = () => {
    return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <HomePage />
        <Routes>
            <Route path="/" />
            <Route path="/contacts" />
            <Route path="/about" />
            <Route path="/sign-up" />
            </Routes>
        </Router>
  );
}

export default App;
