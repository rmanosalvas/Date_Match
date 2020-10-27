import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_up from './pages/Sign_up';
import Dashboard from './pages/Dashboard';
import Password from './pages/Password';
import Recover from './pages/Recover';
import Authentication from './components/Authentication';
import './App.css';
import MatchesNew from './pages/MatchesNew';
import ProfileNew from './pages/ProfileNew';
import CommunityNew from './pages/CommunityNew';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route exact path='/signup'>
            <Sign_up />
          </Route>
          <Route exact path='/recover'>
          <Recover />
          </Route>
          <Route exact path='/password'>
          <Authentication />
            <Password />
          </Route>
          <Route exact path='/dashboard'>
            <Authentication />
            <Dashboard />
          </Route>
          <Route exact path='/matches' >
            <Authentication />
            <MatchesNew />
          </Route>
          <Route exact path='/community'>
            <Authentication />
            <CommunityNew />
          </Route>
          <Route exact path='/profile' >
            <Authentication />
            <ProfileNew />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;