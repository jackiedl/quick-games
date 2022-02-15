import React from 'react';
import { Routes, Route } from "react-router-dom";
import "../../stylesheets/app/App.css";

import Navbar from "./Navbar";
import Home from "../../components/home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
