import React, {useState} from 'react'
import {Email, Person, Lock} from '@material-ui/icons';
import Styles from './Signup.module.css';
import {Button} from '@material-ui/core';
function Signup() {

    const gotoLogin = ()=>{
        window.location.href="/login";
    }

    const[fullname, setFullname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <div className={Styles.signup}>
                <h2>Sign Up and Start Learning!</h2>

                <div className={Styles.outline}>
                    <Person />
                    <input type="text" placeholder="Full Name" className={Styles.input} onChange={(e)=>setFullname(e.target.value)}/>
                </div>

                <div className={Styles.outline}>
                    <Email />
                    <input type="email" placeholder="Email" className={Styles.input} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className={Styles.outline}>
                    <Lock />
                    <input type="password" placeholder="Password" className={Styles.input} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <Button className={Styles.button}>Sign Up</Button>
                <p className={Styles.term}>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
                <p className={Styles.para}>Do you have an account ? <span className={Styles.span} onClick={gotoLogin}>Sign Up</span></p>
                
        </div>
    )
}

export default Signup
