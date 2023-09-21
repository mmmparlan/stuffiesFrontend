import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';
import Register from './Register';
import {Routes,Route,Link} from 'react-router-dom'
import { useEffect, useState} from 'react';




export default function NavBar(){
    const [usernameLogIn,setUsernameLogIn] = useState("");
    const [passwordLogIn,setPasswordLogIn] = useState("");
    const [token,setToken] = useState("");
    const [stuffiesObj,setStuffiesObj] = useState([""]);

    return (
        <>
        <div className="viewBox">
        <div className='navBarBox'>
            <div className='homeShopContactUs'>
            <Link to='/Home.jsx'>&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to='/Shop.jsx'>&nbsp;&nbsp;&nbsp;Shop&nbsp;&nbsp;&nbsp;</Link>
            <Link to='/Contact.jsx'>&nbsp;&nbsp;&nbsp;Contact Us&nbsp;&nbsp;&nbsp;</Link>
            </div>
            <div className='loginCart'>
            <Link to='/Login.jsx'>&nbsp;&nbsp;Login&nbsp;</Link>
            <Link to='/Register.jsx'>&nbsp;&nbsp;SignUp&nbsp;</Link>
            <Link to='/ShoppingCart.jsx'>&nbsp;&nbsp;MyCart&nbsp;</Link>
            </div>
        </div>
        <p></p>
        <Routes className='navBarRoutes'>
            <Route path='/Home.jsx' element={<Home />} />
            <Route path='/Shop.jsx' element={<Shop 
            stuffiesObj={stuffiesObj}
            setStuffiesObj={setStuffiesObj}  />} />
            <Route path='/Contact.jsx' element={<Contact />} />
            <Route path='/Login.jsx' element={<Login 
            token={token}
            setToken={setToken}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn}/>} />
            <Route path='/ShoppingCart.jsx' element={<ShoppingCart
            token={token}
            setToken={setToken}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn} />} />
            <Route path='/Register.jsx' element={<Register 
            token={token}
            setToken={setToken}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn}/>} />
       </Routes>
       
       </div>
      
        </>
    )
}