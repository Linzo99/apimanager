import React, { useState, useEffect } from 'react';
import { useStateValue } from '../stateProvider/StateProvider';
import { actionTypes } from '../stateProvider/reducer';
import { saveToDb } from '../services/Services';

const AddInfoModal = ({api}) => {
    const {state} = useStateValue()
    const {dispatch} = useStateValue()
    const [overview, setOverview] = useState("")
    const [pattern, setPattern] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("GET")
    const path = `apis/${api}/${state.reqType}`
    const retrieveOther = (id) => {
        let all_params = []
        let params  = Array.from(document.querySelectorAll(`#${id} input`))
        params = params.map(item => item.value)
        for(let i=0; i<params.length; i+=3){
            let [name, type, value] = params.slice(i, i+3)
            all_params.push({name, type, value})
        }
        return all_params

    }

    const handleChange = (e) => {
        dispatch({
            type:actionTypes.SET_TYPE,
            value:e.target.value
        })
        setType(e.target.value)
    }

    const handleSubmit = () => {
        let params = retrieveOther('params')
        let query = retrieveOther('query')
        let doc = {
            overview,
            pattern,
            desc,
            type,
            params,
            query
        }
        saveToDb(path, doc)
        
    }
    useEffect(()=>{
        const M = window.M
        const ele = document.querySelector('.modal')
        M.Modal.init(ele)
        const sel = document.querySelectorAll('select');
        M.FormSelect.init(sel)
    },[])
    
    
    return(
        <div id="add-info" className="modal">
            <div className="modal-content">
                <h5 className="center teal-text">Ajouter une Requete</h5>
                <div className="row">
                    <form>
                        <div className="input-field col s6">
                            <input value={overview} onChange={e => setOverview(e.target.value)} type="text" id="overview"/>
                            <label htmlFor="overview">vue</label>
                        </div>
                        <div className="input-field col s6">
                            <input value={pattern} onChange={e => setPattern(e.target.value)} type="text" id="pattern" placeholder="/movie/{id}"/>
                            <label htmlFor="pattern">pattern</label>
                        </div>
                        <div className="input-field col s12">
                            <input value={desc} onChange={e => setDesc(e.target.value)} type="text" className="materialize-textarea" id="desc"/>
                            <label htmlFor="desc" >description</label>
                        </div>
                        <div className="input-field col s6">
                            <select id="type" onChange={(e)=>handleChange(e)}>
                                <option value="GET" defaultValue>GET</option>
                                <option value="POST" >POST</option>
                                <option value="DELETE" >DELETE</option>
                            </select>
                            <label htmlFor="type">type</label>
                        </div>
                        <div className="input-field col s6">
                            <p>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span>requis</span>
                                </label>
                            </p>
                        </div>
                        <Params name='Parametres' id='params'/>
                        <Params name='Chaine de Requete' id='query'/>
                    </form>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={()=>handleSubmit()} className="modal-close waves-effect white-text waves-green teal btn-flat">Ajouter</a>
            </div>
        </div>
    )
}

export default AddInfoModal;

const Params = ({name, id}) =>  {

    const [params, setParams] = useState(0)
    const {state} = useStateValue()

    useEffect(()=>{
        setParams(0)
    },[state.reqType])

    const addParam = (e) => {
        e.preventDefault()
        let i = params + 1
        setParams(i)
    }
    return(
        <div className="col s12" id={id}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h6 className="grey-text text-darken-3">{name}</h6>
                <a href="#" onClick={(e)=>addParam(e)} className="btn-floating"><i className="material-icons white-text">add</i></a>
           </div>
            {[...Array(params)].map(i =>(<Param/>))}
        </div>
    )
}


const Param = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("string")
    const [required, setRequired] = useState("")

    useEffect(()=>{
        const M = window.M
        const sel = document.querySelectorAll('select');
        M.FormSelect.init(sel)
    },[])

    return(
        <div className="col s12 param">
            <div className="input-field col s12 m4">
                <input value={name} onChange={e => setName(e.target.value)} type="text" id="param_name"/>
                <label htmlFor="param_name">nom</label>
            </div>
            <div className="input-field col s12 m4">
                 <select value={type} onChange={e => setType(e.target.value)} id="param_type">
                    <option value="integer" >Integer</option>
                    <option value="string" >String</option>
                </select>
                <label htmlFor="param_type">type</label>
            </div>
            <div className="input-field col s12 m4">
                <select value={required} onChange={e => setRequired(e.target.value)} id="param_type">
                    <option value="requis"  >Requis</option>
                    <option value="optionnel"  >Optionnel</option>
                </select>
            </div>
        </div>
    )
}