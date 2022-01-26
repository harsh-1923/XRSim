import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import AuthProvider from "./Context/AuthContext";
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import Footer from './Components/Footer/Footer';
import RentalsPage from "./Pages/RentalsPage/RentalsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const dark = true;

  return (
    <AuthProvider>
      <div className="App">
        <Navbar dark={dark} />
        <Routes>
          <Route path="/" element={<LandingPage dark={dark}/>} />
          <Route path="/register" element={<RegisterPage dark={true}/>} />
          <Route path="/login" element={<LoginPage dark={dark} />} />
          <Route path="/profile" element={<ProfilePage dark={dark} />} />
          <Route path="/rental" element={<RentalsPage dark={dark}/>} />
        </Routes>
        <Footer dark={dark} />
      </div>
    </AuthProvider>
  );
}

export default App;
