import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {logout} from '../../services/Services'
import { useStateValue } from '../../stateProvider/StateProvider';

const SideNav = (props) => {
    const {currentUser} = useStateValue()

    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.sidenav')
        M.Sidenav.init(ele)
    },[])

    return(
        <ul id="mobile-menu" className="sidenav grey darken-4">
            <li>
                <div className="user-view">
                    <div className="backgroud">
                        <img src="" alt="" className="responsive-img"/>
                    </div>
                    <img alt="" className="circle" src={currentUser.photoURL}/>
                    <span className="white-text name">{currentUser.displayName}</span>
                    <span className="white-text email">{currentUser.email}</span>
                </div>
            </li>
            <li><a href="#" data-target="add-modal" className="white-text grey darken-2 modal-trigger"><i className="material-icons blue-text">add</i> Ajouter une API</a></li>
            <li><NavLink to="/login" onClick={()=>logout()} className="red-text white center hide-on-med-and-up">Logout</NavLink></li>
        </ul>
    )
}

export default SideNav;
