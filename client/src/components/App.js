import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isLoggedIn } from "../api/authToken";

import Home from "./common/Home";
import Navbar from "./common/Navbar";
import ProfileList from "./personas/ProfileList";
import UserProfile from "./personas/UserProfile";
import Login from "./reglog/Login";
import Registration from "./reglog/Registration";
// import SecureRoute from "./common/SecureRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myprofile/:id" element={<UserProfile />} />
        <Route path="/search" element={<ProfileList />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
