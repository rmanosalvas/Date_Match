import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/singup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/newpost' component={Newpost} />
          <Route exact path='/matches' component={Matches} />
          <Route exact path='/community' component={Community} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;