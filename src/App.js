import React, { Component } from 'react';
import './App.css';
import LivePage from './components/LivePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import ComingPage from './components/ComingPage'
import styled from 'styled-components'
import NavBar from './components/NavBar'






class App extends Component {
  render() {
    return (
      <div>
      
         
      <NavBar/>
      <Router>
        
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/LivePage" component={LivePage} />
      <Route exact path="/ComingPage" component={ComingPage}/>

      </Switch>
      </Router>
      
      </div>
    );
  }
}

export default App;
