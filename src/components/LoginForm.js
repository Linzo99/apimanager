import React, { useState } from 'react';
import { auth } from '../firbase';

const LoginForm = ({params}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const connect = (e) => {
        
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then()
        .catch(error=>alert(error.message))
    
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
                <input onClick={(e)=>connect(e)}type="submit" value="valider" className="btn right"/>
            </form>
        </div>
    )
}
export default LoginForm;
