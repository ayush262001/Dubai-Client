import React, {useState} from 'react'
import {Email, Person, Lock} from '@material-ui/icons';
import Styles from './Login.module.css';
import {Button} from '@material-ui/core';
function Login() {

    const gotoSignup = ()=>{
        window.location.href="/signup";
    }

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <div className={Styles.login}>
                <h2>Log In and Start Learning !</h2>
                <div className={Styles.outline}>
                    <Email />
                    <input type="email" placeholder="Email" className={Styles.input} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className={Styles.outline}>
                    <Lock />
                    <input type="password" placeholder="Password" className={Styles.input} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <Button className={Styles.button}>Log In</Button>
                <p className={Styles.para}>Do not have an account ? <span className={Styles.span} onClick={gotoSignup}>Sign Up</span></p>
                
        </div>
    )
}

export default Login
