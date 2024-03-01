import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spaces from "./pages/spaces/Spaces";
import Bookings from "./pages/bookings/Bookings";
import Login from "./pages/account/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Spaces" element={<Spaces />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
