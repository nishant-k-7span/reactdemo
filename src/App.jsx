import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import AppRoute from "./page/AppRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = (userData) => {
    console.log("Sign up data:", userData);
  };
  const handleLogin = (userData) => {
    console.log("Login data:", userData);
    setLoggedIn(true);
  };

 
 
  return (
    <>
      {/* <Router>
       
        <div className="max-w-[1280px] mx-auto pt-8 px-5 relative">
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/approut" element={loggedIn ? <AppRoute /> : <Login onLogin={handleLogin} />} />
           
        
          </Routes>

      

        </div>
      </Router> */}
      <AppRoute />
      </>
      );
}
export default App;