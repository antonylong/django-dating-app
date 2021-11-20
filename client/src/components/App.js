import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isLoggedIn } from "../api/authToken";

import Home from "./common/Home";
import Navbar from "./common/Navbar";
import EditProfile from "./personas/EditProfile";
import NewProfile from "./personas/NewProfile";
import ProfileList from "./personas/ProfileList";
import MyProfile from "./personas/MyProfile";
import Login from "./reglog/Login";
import Registration from "./reglog/Registration";
import ShowProfile from "./personas/ShowProfile";
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
        <Route path="/personas/myprofile/:user" element={<MyProfile />} />
        <Route path="/search" element={<ProfileList />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newprofile" element={<NewProfile />} />
        <Route
          path="/personas/myprofile/:user/edit"
          element={<EditProfile />}
        />
        <Route path="/personas/:id" element={<ShowProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
