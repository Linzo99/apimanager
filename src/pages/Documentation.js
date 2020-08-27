import React, { useEffect, useState } from 'react';
import CollapsibleItem from '../components/Collapsible';
import { getCollections } from '../services/Services';
import Information from '../components/Information';
import AddInfoModal from '../components/AddInfoModal';

const Documentation = (props) => {
    const id = props.match.params.id
    const [res, setRes] = useState([])


    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.collapsible')
        M.Collapsible.init(ele)

        getCollections(id).then(result => {
            setRes(result)
        })
    },[res])
    
    
    return(
        <div className="doc-container grey lighten-3 z-depth-2">
            <div className="row">
                <div className="col s12 m3 sidebar">=
                    <div className="input-field">
                        <i className="material-icons center prefix">search</i>
                        <input type="text" id="search"/>
                        <label htmlFor="search">Recherche</label>
                    </div>
                    <a href="#" id="add-fab" data-target="add-info" className="btn-floating modal-trigger pulse blue right"><i className="material-icons white-text center">add</i></a>
                    <ul className="collapsible ">
                        <CollapsibleItem name={'GET'} content={res.GET}/>
                        <CollapsibleItem name={'POST'} content={res.POST}/>
                        <CollapsibleItem name={'DELETE'} content={res.DELETE}/>
                    </ul>
                </div>
                <Information/>
            </div>
            <AddInfoModal api={id}/>
        </div>
    )
}

export default Documentation;
