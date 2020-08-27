import React, { useState } from 'react';
import { signIn, signInWithGoogle } from '../services/Services';

const LoginForm = ({params}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const connect = (e) => {
        
        e.preventDefault()
        signIn(email, password)
    }

    const googleConn = (e) => {
        e.preventDefault()
        signInWithGoogle()

    }
    return(
        <div className="login-form z-depth-2">
            <form>
                <h4 className="center teal-text"> Connexion </h4>
                <div className="input-field">
                    <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="row">
                    <div onClick={(e)=>googleConn(e)} className="input-field col s2">
                        <i className="fab fa-google left btn">oogle</i>
                    </div>
                    <div className="input-field col s2 offset-s8">
                        <input onClick={(e)=>connect(e)}type="submit" value="valider" className="btn right"/>   
                    </div>
                </div>
                
            </form>
        </div>
    )
}
export default LoginForm;
