import React from 'react';
import { Link } from 'react-router-dom'
import { removeApi } from '../services/Services';

const ApiItem = ({api}) => {

    const traitement = (e) =>{
        e.preventDefault()
        removeApi(api.id)
    }
    return(
        <Link className="card hoverable col s12 m5 l4 offset-l1 offset-m1" to={`/doc/${api.id}`}>
            <p className="card-title">{api.nom}</p>
            <div className="card-content black-text">
                <p style={{fontSize:13}} className="grey-text text-darken-2">{api.description}</p>
            </div>
            <a href="#" onClick={e=>traitement(e)} className="rem-btn"><i className="material-icons red-text">delete</i></a>
        </Link>
    )
}
export default ApiItem;
