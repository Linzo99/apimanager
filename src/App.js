import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import SideNav from './components/navbar/SideNav';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import { PrivateRoute } from './components/PrivateRoute';
import { useStateValue } from './stateProvider/StateProvider';
import AddModal from './components/AddModal';

function App() {
  const {currentUser} = useStateValue()
  const connected = currentUser ? true : false
  console.log('****************** '+connected+' ************************')
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <PrivateRoute exact path="/login" component={Login} connected={!connected} redirect='/home'/>
          <PrivateRoute path="/home" component={Home} connected={connected}/>
          <PrivateRoute exact path="/doc/:id" component={Documentation} connected={connected}/>
        </Switch> 
        {connected === true ? (<AddModal/>): (<></>)}
      </div>
    </Router>
   
  );
}

export default App;
