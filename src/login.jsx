import React from "react";
import showpass from "./showpass.svg";
import hidepass from "./hidepass.svg";



function show() {
    const pass =  document.querySelector('.password');
    pass.type = 'text';
 
 }

const Login = () => {

    return(
        <>
            <div className="log-cont">
                <h1 className="title">
                    login in
                </h1>
                <h3 className="title co-title">
                    Log in to continue
                </h3>
            </div>
            <div className="form-cont">
                <div className="input-cont">
                    <div className="cont">
                        <input className="input-feild email"
                        type="text"
                        placeholder="Email" />
                    </div>
                    <div className="cont pass-cont">
                        <input 
                        className="input-feild password"
                        type="password"
                        placeholder="Password" />
                        <img className="show-pass show"  src={showpass} alt="no photo"/>
                        <img className="show-pass hide" src={hidepass} alt="no photo"/>
                    </div>
                </div>
                <div className="btn-cont">
                    <input className="btn"  type="btn" value="LOG IN"/>
                    <p className="sign-text">Don’t have an account? <a className="sign-in">Sign up</a></p>
                </div>

            </div>
        </>
    )
};


export default Login;