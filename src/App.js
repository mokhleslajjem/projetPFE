import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loginpage from "./Components/Login/Login";
import Inscrirepage from "./Components/inscrire/inscrire"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<LoginPageLayout />} />
                <Route path="/register" element={<InscrirePageLayout />} />
            </Routes>
        </Router>
    );
};

const MainLayout = () => (
    <>
        <Navbar />
        <Home />
        <Main />
        <Footer />
    </>
);

const LoginPageLayout = () => (
    <>
        <Navbar />
        <Loginpage />
    </>
);

const InscrirePageLayout = () => (
    <>
        <Navbar />
        <Inscrirepage />
    </>
);

export default App;
