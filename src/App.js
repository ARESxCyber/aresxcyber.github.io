import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Members from './pages/Members';
import WriteUps from './pages/WriteUps';
import Scores from './pages/Scores';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const TEAM_ID = '128734';

function App() {
  return (
    <Container>
      <Router>
        <Navigation>
          <Navbar />
        </Navigation>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/write_ups">
            <WriteUps />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        </Switch>
      </Router>
      
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: red;
  background-color: black;
`;

const Navigation = styled.ul`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  display: flex;
  text-transform: uppercase;
  list-style: none;
  margin: 50px;
  padding: 0;

  .navbar-item {
    margin: 0 20px;
  }

  a {
    color: inherit;
    font-size: 30px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #af0000;
  }
`;

export default App;
