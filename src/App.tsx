import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import SavedArticles from "./pages/SavedArticles";
import Contacts from "./pages/Contacts";
import SignUp from  "./pages/SignUp";
import {Playground} from "./pages/Playground";


const App = () => {
    return (
    <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path ="/articles/saved" element={<SavedArticles/>} />
            <Route path ="/playground" element={<Playground/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
