import React from 'react';
import { useStateValue } from '../stateProvider/StateProvider';
import { colors } from './Collapsible'

const Information = ()=>{
    const {state} = useStateValue()
    const item = JSON.parse(localStorage.getItem('info'))
    return(
        <div className="col s12 m9 info-container">
                    <nav className="nav-wrapper grey lighten-1">
                        <span className="brand-logo align-center teal-text" style={{paddingLeft:20}}>Information</span>
                    </nav>
                    <div className="inf-header">
                        <span className="grey-text darken-3" style={{fontSize:12, color:'black'}}>{item.overview}</span>
                        <div className="pattern">
                            <h5 className={`${colors[item.type]}`}>{item.type}<span style={{paddingLeft:20, color:"black"}}>{item.pattern}</span></h5>
                            <p className="grey-text text-darken-2"> Little description of this pattern</p>
                        </div>
                        <div className="tabs transparent" style={{padding:10}}>
                            <a href="#definition" className="tab active btn transparent grey-text text-darken-2" style={{margin:2, padding:2}}>Definition</a>
                            <a href="#tester" className="tab btn transparent grey-text text-darken-2" style={{margin:2, padding:2}}>Tester</a>
                        </div>
                    </div>
                    <div className="col s12 white " id="definition">
                        <div>
                            <h6>Authentification</h6>
                            <span style={{marginLeft:5, fontSize:12}}>API key</span>
                        </div>
                        <div style={{paddingTop:30}}>
                            <h6>Parametres</h6>
                            <table className="striped" border={1}>
                                <tbody>
                                <tr>
                                    <td>movie_id</td>
                                    <td>integer</td>
                                    <td>required</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{paddingTop:30}}>
                            <h6>Chaine De Requete</h6>
                            <table className="striped" border={1}>
                                <tbody>
                                <tr>
                                    <td>movie_id</td>
                                    <td>integer</td>
                                    <td>required</td>
                                </tr>
                                <tr>
                                    <td>movie_id</td>
                                    <td>integer</td>
                                    <td>required</td>
                                </tr>
                                <tr>
                                    <td>movie_id</td>
                                    <td>integer</td>
                                    <td>required</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h6>Reponse</h6>
                            <span style={{marginLeft:5, fontSize:12}}>API key</span>
                        </div>
                    </div>
                  
                </div>
    )
}

export default Information;
