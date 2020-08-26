import React, { useState, useEffect } from 'react';
import { addApi } from '../services/Services';

const AddModal = (props) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.modal')
        M.Modal.init(ele)
    },[])
    
    return(
        <div id="add-modal" className="modal">
            <div className="modal-content">
                <h5 className="center teal-text">Ajouter une API</h5>
                <div className="input-field">
                    <input 
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        type="text" id="nom"/>
                    <label htmlFor="nom">nom</label>
                </div>
                <div className="input-fiedl">
                    <input 
                        onChange={(e)=>setDesc(e.target.value)}
                        value={desc}
                        className="materialize-textarea" 
                        id="description"/>
                    <label htmlFor="discription">description</label>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={()=>addApi(name, desc)} className="modal-close waves-effect white-text waves-green teal btn-flat">Ajouter</a>
            </div>
        </div>
    )
}

export default AddModal;
