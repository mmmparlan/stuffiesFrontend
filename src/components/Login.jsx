import {useState, useEffect} from 'react'
import {loginUser} from '../api/index'


function ShowLogIn({loginUsername,setLoginUsername,loginPassword,setLoginPassword,token,setToken,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}){
    if (token){return;}

    useEffect(()=>{
        if(token){return}
        async function logUser(){
            try {
                const response = await loginUser(loginUsername,loginPassword);
                const result = response;
                console.log(result.token);
                //setToken(result.token);
                setToken(result);
                setUsernameLogIn("");
                setPasswordLogIn("");
            } catch (err) {
                console.error(err)
            }
        }
        logUser();
    },[loginUsername,loginPassword]);

    function handleSubmit(event){
        event.preventDefault();
        console.log('login handleSubmit click')
        console.log(usernameLogIn)
        console.log(`username: ${usernameLogIn}`)
        console.log(`password: ${passwordLogIn}`)
        setLoginUsername(usernameLogIn);
        setLoginPassword(passwordLogIn);
    };

    return(
        <>
        <div className="loginWindow">
        <h3 className="memberLogInHeading">Member Log In</h3>
        {""}
        <form className="loginForm" onSubmit={handleSubmit}>
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

function AlreadyLoggedIn({token,setToken,setLoginUsername,setLoginPassword}){
    if (!token){return;};

    function handleClick(event){
        event.preventDefault();
        console.log("handleClick clicked, trying to log out user");
        setToken("");
        setLoginUsername("");
        setLoginPassword("");
    }
    
        return(
            <>
            <div className="loginWindow">
            <h3>You're already logged in</h3>
            <button className="logoutButton" onClick={handleClick}>Log Out</button>
            </div>
            </>
        )
    
}


export default function Login({token,setToken,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}){
const [loginUsername,setLoginUsername] = useState("");
const [loginPassword,setLoginPassword] = useState("");
    
    return (
        <>
        <AlreadyLoggedIn 
        token={token} 
        setToken={setToken}
        setLoginUsername={setLoginUsername}
        setLoginPassword={setLoginPassword} />

        <ShowLogIn 
        token={token}
        setToken={setToken}
        usernameLogIn={usernameLogIn}
        setUsernameLogIn={setUsernameLogIn}
        passwordLogIn={passwordLogIn}
        setPasswordLogIn={setPasswordLogIn}
        loginUsername={loginUsername}
        setLoginUsername={setLoginUsername}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}/>
        </>
    )
}