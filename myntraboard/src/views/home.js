import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import boards from '../components/MyntraBoard/Boards'
import BoardForm from "../components/MyntraBoard/BoardForm";
import BoardList from "../components/MyntraBoard/BoardList";
import Navbar8 from "../components/navbar8";
import Hero17 from "../components/hero17";
import Features24 from "../components/features24";
import CTA26 from "../components/cta26";
import Features25 from "../components/features25";
import Steps2 from "../components/steps2";
// import Testimonial17 from '../components/testimonial17'
import "./home.css";

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const savedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    setBoards(savedBoards);
  }, []);

  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

  const addBoard = (board) => {
    setBoards([...boards, board]);
  };

  const updateBoard = (updatedBoard) => {
    setBoards(boards.map((board) => (board.id === updatedBoard.id ? updatedBoard : board)));
  };

  const deleteBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <>
            <Navbar8 />
            <Hero17 />
            <Features24 />
            <CTA26 />
            <Features25 />
            <Steps2 />
          </>
        )} />
        <Route path="/explore-boards" render={() => (
          <>
          <div className='explore'>
            <h1>Explore Boards</h1>
            <BoardForm addBoard={addBoard} />
            <BoardList boards={boards} updateBoard={updateBoard} deleteBoard={deleteBoard} />
            </div>
          </>
        )} />
      </Switch>
    </Router>
  );
};

export default Home;
