import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/Nav'
import Sign_up from './pages/Sign_up';
import Dashboard from './pages/Dashboard';
import Password from './pages/Password';
import Matches from './pages/Matches'
import Newpage from './pages/Newpage'



function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path='/' id='logIn'>
            <LoginPage />
          </Route> 
          <Route exact path='/signup' >
          <Sign_up />
          </Route>
          <Route exact path='/dashboard' >
          <Dashboard />
          </Route>
          {/* <Route exact path='/newpost' component={Newpost} /> */}
          {/* <Route exact path='/matches' component={Matches} /> */}
          {/* <Route exact path='/community' component={Community} /> */}
          <Route exact path='/password'>
          <Password />
          </Route> 
          <Route exact path='/matches' >
          <Matches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;