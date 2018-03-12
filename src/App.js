import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Header';
import Search from './components/Search';
import Dogs from './components/Dogs';
import Elephants from './components/Elephants';
import Bears from './components/Bears';
import Turtles from './components/Turtles';



class App extends Component {
  render() {
    return (

    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Flickr Photo Search</h1>
        </div>

      <Menu />

      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route exact path='/search' component = {Search}/>
        <Route exact path='/dogs' component = {Dogs}/>
        <Route exact path='/elephants' component = {Elephants}/>
        <Route exact path='/bears' component = {Bears}/>
        <Route exact path='/turtles' component = {Turtles}/>
      </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
