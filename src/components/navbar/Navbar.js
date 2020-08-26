import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../../firbase'
import SideNav from './SideNav'
import { useStateValue } from '../../stateProvider/StateProvider';
import { logout } from '../../services/Services'

const Navbar = () => {
    const {currentUser} = useStateValue()
    const connected = currentUser ? true : false
    
    return(
        <nav className="nav-wrapper grey darken-3 navbar">
            <div className="container">
                <Link to="/home" className="brand-logo">APImanager</Link>
                {connected && (
                    <a href="#" className="sidenav-trigger right" data-target="mobile-menu">
                        <i className="material-icons">menu</i>
                    </a>
                )}
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/login" onClick={()=>logout()} >{connected ? 'Logout':'Login'}</NavLink></li>
                </ul>
                {connected && (<SideNav/>)} 
            </div>
        </nav>
    )

}
 
export default Navbar;
