import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav'
import Sign_up from './pages/Sign_up';
import Dashboard from './pages/Dashboard';
import Password from './pages/Password';
import Matches from './pages/Matches'
import Newpage from './pages/Newpage'
import Nav from './components/Nav'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Authentication from './components/Authentication'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' id='logIn'>
            <LoginPage />
          </Route> 
          <Route exact path='/signup' >
          <Sign_up />
          </Route>
          <Route exact path='/dashboard' component={Community}>
          <Nav />
          <Dashboard />
          </Route>
          <Route exact path='/password'>
          <Password />
          </Route> 
          <Route exact path='/matches' >
          <Nav />
          <Matches />
          </Route>
          <Route exact path='/community'>
            <Nav />
          <Community />
          </Route>
          <Route exact path='/profile' >
          <Nav />
          <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;