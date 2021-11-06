import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./common/Home";
import Navbar from "./common/Navbar";
import UserProfile from "./personas/UserProfile";
import Login from "./reglog/Login";
import Registration from "./reglog/Registration";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myprofile" element={<UserProfile />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
