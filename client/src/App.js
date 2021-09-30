// jshint ignore:start
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Movie from "./views/Movie"
import Home from "./views/Home"
import Signin from "./views/Signin"
import SignupPassword from "./views/SignupPassword"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/movies" component={Movie} />
        <Route path="/login" component={Signin} />
        <Route path="/signup/password" component={SignupPassword} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )  
}

export default App;
