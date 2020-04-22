import React from 'react';
import './App.css';
//import { HashRouter as Router, Route } from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Project from './components/project/Project';
import Contact from './components/Contact';
//import { Route, BrowserRouter as Router } from "react-router-dom";
import Detail from './components/project/Detail.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
          {/* <Navigation></Navigation> */}
          <Route path="/" exact={true} component={Navigation}></Route>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/" exact={true} component={Project}></Route>
          <Route path="/" exact={true} component={About}></Route>
          <Route path="/" exact={true} component={Contact}></Route>
          <Route path="/project/:id" exact={true} component={Detail}></Route>
          <Route path="/" exact={true} component={Footer}></Route>
          {/* <Home></Home>
          <Project></Project>
          <About></About>
          <Contact></Contact> */}
          
      </HashRouter>

      {/* <HashRouter>
        <Navigation></Navigation>
          <Route path="/" exact={true} >home</Route>
          <Route path="/" exact={true} >about</Route>
          <Route path="/" exact={true} >skills</Route>
          <Route path="/" exact={true} >project</Route>
          <Route path="/" exact={true} >contact</Route>
      </HashRouter> */}
    </div>
    
  );
}

export default App;
