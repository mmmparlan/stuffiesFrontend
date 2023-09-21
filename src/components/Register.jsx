import { useState,useEffect } from 'react';
import {registerUser} from '../api/index'

function AlreadySignedUp({token}){
    if (token){
        return(
            <>
            <div className="signUpWindow">
                <h1></h1>
                <h1></h1>
            <h2 className="alreadySignedUp" >you're already signed up!</h2>
            </div>
            </>
        )
    }
}

function ShowSignUp({token,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn,setUsrname,setPsword}){
    if (token){return;}

    function handleSubmit(event){
        event.preventDefault();
        console.log('signUp handleSubmit click')
        console.log(usernameLogIn)
        console.log(`username: ${usernameLogIn}`)
        console.log(`password: ${passwordLogIn}`)
        setUsrname(usernameLogIn);
        setPsword(passwordLogIn);

    };

    if (!token){
        return(
            <>
            <div className="signUpWindow">
            <h3 className="signUpHeading">Sign Up!</h3>
            
            <form className="signUpForm" onSubmit={handleSubmit}>
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
            <button>Sign Up</button>
            <p></p>
            <p></p>
            </form>
            <p></p>
            </div>
            </>
        )
    }
}


export default function Register({token,setToken,usernameLogIn,setUsernameLogIn,passwordLogIn,setPasswordLogIn}) {
    const [usrname,setUsrname] = useState(null);
    const [psword,setPsword] = useState(null);

    useEffect(()=>{
        if (token){return;}
        if (usrname && psword){
            async function createUserAccount(){
                try {
                    const response = await registerUser(usrname,psword);
                    const result = response;
                    console.log(result.token);
                    setToken(result.token);
                    setUsernameLogIn("");
                    setPasswordLogIn("");
                    console.log(`this is now usernameLogIn: ${usernameLogIn}`)
                    
                } catch(err){
                    console.error(err)
                }
            }
            createUserAccount();
        } else {
            return 
        }
    },[usrname,psword]);



    return(
        <>
        <AlreadySignedUp 
        token={token} />

        <ShowSignUp 
        token={token} 
        setUsrname={setUsrname} 
        usrname={usrname} 
        setPsword={setPsword}
        psword={psword}
        usernameLogIn={usernameLogIn}
        passwordLogIn={passwordLogIn}
        setUsernameLogIn={setUsernameLogIn}
        setPasswordLogIn={setPasswordLogIn} />
        
        
        
        </>
    )
}