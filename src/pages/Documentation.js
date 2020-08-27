import React, { useEffect, useState } from 'react';
import CollapsibleItem from '../components/Collapsible';
import { getCollections } from '../services/Services';
import Information from '../components/Information';
import AddInfoModal from '../components/AddInfoModal';
import Loader from 'react-loader-spinner'

const Documentation = (props) => {
    const id = props.match.params.id
    const [res, setRes] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        const M = window.M
        const ele = document.querySelector('.collapsible')
        M.Collapsible.init(ele)

        getCollections(id).then(result => {
            setRes(result)
            setLoaded(true)
        })
    },[loaded])
    
    if(!loaded)
        return(
            <div className="main-container">
                 <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
            </div>
        )
    else
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
