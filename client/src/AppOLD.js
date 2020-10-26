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
          <Route exact path='/Password'>
          <Authentication />
          <Password />
          </Route>
          <Route exact path='/dashboard'>
          <Authentication />
          <Dashboard />          
          </Route> 
          <Route exact path='/matches' >
          <Authentication />
          <Nav />
          <Matches />
          </Route>
          <Route exact path='/community'>
          <Authentication />
          <Nav />
          <Community />
          </Route>
          <Route exact path='/profile' >
          <Authentication />
          <Nav />
          <Profile />
          </Route>
          <Route exact path='/newpage' >
          <Nav />
          <Newpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;