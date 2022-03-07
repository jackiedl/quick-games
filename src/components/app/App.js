import React from 'react';
import { Routes, Route } from "react-router-dom";
import "../../stylesheets/app/App.css";

import Navbar from "./Navbar";
import Home from "../../components/home/Home";
import ReactionTime from '../games/reactiontime/ReactionTime';
import TicTacToe from "../games/tictactoe/TicTacToe";
import ConnectFour from "../games/connectfour/ConnectFour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/reactiontime" element={<ReactionTime />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/connectfour" element={<ConnectFour />} />
      </Route>
    </Routes>
  );
}

export default App;
