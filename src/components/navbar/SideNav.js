import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from '../../services/Services'

const SideNav = (props) => {

    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.sidenav')
        M.Sidenav.init(ele)
    },[])
    return(
        <ul id="mobile-menu" className="sidenav grey darken-3">
            <li>
                <div className="user-view">
                    <div className="backgroud">
                        <img src=""/>
                    </div>
                    <img className="circle" src=""/>
                    <span className="white-text name">Linzo Sall</span>
                    <span className="white-text email">sallalioune99@gmail.com</span>
                </div>
            </li>
            <li><a href="#" data-target="add-modal" className="white-text grey lighten-1 modal-trigger"><i className="material-icons blue-text">add</i> Ajouter une API</a></li>
            <li><NavLink to="/login" onClick={()=>logout()} className="red-text white center hide-on-med-and-up">Logout</NavLink></li>
        </ul>
    )
}

export default SideNav;
