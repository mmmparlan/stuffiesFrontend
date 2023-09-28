import {useState, useEffect} from 'react'
import {loginUser} from '../api/index'


function ShowLogIn({setUserIdObj,usernameObj,setUsernameObj,loginUsername,setLoginUsername,loginPassword,setLoginPassword,tokenObj,setTokenObj,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}){
    if (usernameObj){return;}
    const [runUseEffect,setRunUseEffect] = useState(false);
    useEffect(()=>{
         if(runUseEffect === true){
            async function logUser(){
                try {
                    const response = await loginUser(loginUsername,loginPassword);
                    // const result = response;
                    if (response.token){
                    const result = response;
                    await setTokenObj(result);
                    console.log('console.log response.token')
                    console.log(`this is response.token ${response.token}`);
                    await setTokenObj(response.token);
                    await setUsernameObj(response.user.username)
                    await setUserIdObj(response.user.id)
                    console.log(response.user.id)
                    console.log(`this is result.user.username ${response.user.username}`)
                    console.log(`${usernameObj}`)
                    console.log(tokenObj)
                    setUsernameLogIn("");
                    setPasswordLogIn("");
                    }
                    
                } catch (err) {
                    console.error(err)
                }
            }
            
        logUser();
         }

    },[loginUsername,loginPassword]);

    function handleSubmit(e){
        e.preventDefault();
        console.log('login handleSubmit click')
        console.log(usernameLogIn)
        console.log(`username: ${usernameLogIn}`)
        console.log(`password: ${passwordLogIn}`)
        setLoginUsername(usernameLogIn);
        setLoginPassword(passwordLogIn);
        setRunUseEffect(true)
    }
    return(
        <>
        <div className="loginWindow">
        <h3 className="memberLogInHeading">Member Log In</h3>
        {""}
        <form className="loginForm" onSubmit={(e) => {handleSubmit(e)}}>
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

function AlreadyLoggedIn({usernameObj,setUsernameObj,tokenObj,setTokenObj,setLoginUsername,setLoginPassword}){
    if (!usernameObj){return;};

    function handleClick(event){
        event.preventDefault();
        console.log("handleClick clicked, trying to log out user");
        setTokenObj("");
        setUsernameObj("");
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


export default function Login({userIdObj,setUserIdObj,usernameObj,setUsernameObj,tokenObj,setTokenObj,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}){
const [loginUsername,setLoginUsername] = useState("");
const [loginPassword,setLoginPassword] = useState("");
    console.log('Login component rendering and Login useState just set to default ')
    return (
        <>
        <AlreadyLoggedIn
        usernameObj={usernameObj}
        setUsernameObj={setUsernameObj} 
        tokenObj={tokenObj} 
        setTokenObj={setTokenObj}
        setLoginUsername={setLoginUsername}
        setLoginPassword={setLoginPassword} />

        <ShowLogIn 
        userIdObj={userIdObj}
        setUserIdObj={setUserIdObj}
        usernameObj={usernameObj}
        setUsernameObj={setUsernameObj}
        tokenObj={tokenObj}
        setTokenObj={setTokenObj}
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