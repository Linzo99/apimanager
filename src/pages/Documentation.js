import React, { useEffect, useState } from 'react';
import CollapsibleItem from '../components/Collapsible';
import { getCollections } from '../services/Services';
import Information from '../components/Information';

const Documentation = (props) => {
    const id = props.match.params.id
    const [loaded, setLoaded] = useState(false)
    const [res, setRes] = useState([])


    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.collapsible')
        M.Collapsible.init(ele)

        getCollections(id).then(result => {
            setRes(result)
        })
    },[])

    
    return(
        <div className="doc-container grey lighten-3 z-depth-2">
            <div className="row">
                <div className="col s12 m3 sidebar">
                    <div className="input-field">

                        <i className="material-icons center prefix">search</i>
                        <input type="text" id="search"/>
                        <label htmlFor="search">Recherche</label>
                    </div>
                    <ul className="collapsible ">
                        <CollapsibleItem name={'GET'} content={res.GET}/>
                        <CollapsibleItem name={'POST'} content={res.POST}/>
                        <CollapsibleItem name={'DELETE'} content={res.DELETE}/>
                    </ul>
                </div>
                <Information/>
            </div>
            <script>
                $('.collapsible').collapsible()
            </script>
        </div>
    )
}

export default Documentation;
