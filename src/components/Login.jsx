import {useState, useEffect} from 'react'




export default function Login({usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}){

    function handleSubmit(event){
        event.preventDefault();
        console.log('login handleSubmit click')
        console.log(usernameLogIn)
        console.log(`username: ${usernameLogIn}`)
        
        console.log(`password: ${passwordLogIn}`)
    };

    return (
        <>
        <div className="loginMyCartWindow">
        <h3 className="memberLogInHeading">Member Log In</h3>
        {""}
        <form onSubmit={handleSubmit}>
            <label className="username">Username</label>
            <input 
                className="usernameField"
                type="text" 
                value={usernameLogIn}
                onChange={(e) => setUsernameLogIn(e.target.value)} />
                <p></p>
                <label className="password">Password</label>  
            <input 
                className="passwordField"
                type="password" 
                value={passwordLogIn}
                onChange={(e) => setPasswordLogIn(e.target.value)} />
            <p></p>
            <button>Log In</button>
            <p></p>
            <p></p>
        </form>
        <p></p>

        </div>    
        </>
    )
}