import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav'
import Sign_up from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Password from './pages/Password';
import Recover from './pages/Recover';
import Matches from './pages/Matches'
import Newpage from './pages/Newpage'
import Nav from './components/Nav'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Authentication from './components/Authentication'
import './App.css';
import MatchesNew from './pages/MatchesNew'
import ProfileNew from './pages/ProfileNew'
import CommunityNew from './pages/CommunityNew'


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
            {/* <Matches /> */}

          </Route>
          <Route exact path='/community'>
            <Authentication />
            <CommunityNew />
            {/* <Community /> */}

          </Route>
          <Route exact path='/profile' >
            <Authentication />
            <ProfileNew />
            {/* <Profile /> */}
          </Route>
          <Route exact path='/newpage' >
            <Newpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;