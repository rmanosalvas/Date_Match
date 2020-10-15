import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          {/* <Route exact path='/singup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/newpost' component={Newpost} />
          <Route exact path='/matches' component={Matches} />
          <Route exact path='/community' component={Community} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;