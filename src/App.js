import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import { PrivateRoute } from './components/PrivateRoute';
import { useStateValue } from './stateProvider/StateProvider';
import AddApiModal from './components/AddApiModal';

function App() {
  const {currentUser} = useStateValue()
  const connected = currentUser ? true : false
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <PrivateRoute path="/login" component={Login} connected={!connected} redirect='/home'/>
          <PrivateRoute exact path="/home" component={Home} connected={connected}/>
          <PrivateRoute exact path="/doc/:id" component={Documentation} connected={connected}/>
        </Switch> 
        {connected === true ? (<AddApiModal/>): (<></>)}
      </div>
    </Router>
   
  );
}

export default App;
