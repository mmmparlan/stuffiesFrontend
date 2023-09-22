import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';
import Register from './Register';
import {Routes,Route,Link} from 'react-router-dom'
import { useEffect, useState} from 'react';

export default function NavBar({
        // usernameLogIn,setUsernameLogIn,
        // passwordLogIn,setPasswordLogIn,
        // tokenObj,setTokenObj,
        // stuffiesObj,setStuffiesObj,
        // reviewsObj,setReviewsObj,
        // usernameObj,setUsernameObj,
        // singleViewStuffyId,setSingleViewStuffyId
    }){

        const [usernameLogIn,setUsernameLogIn] = useState("");
        const [passwordLogIn,setPasswordLogIn] = useState("");
        const [tokenObj,setTokenObj] = useState({});
        const [stuffiesObj,setStuffiesObj] = useState([""]);
        const [reviewsObj,setReviewsObj] = useState([""]);
        const [usernameObj,setUsernameObj] = useState("");
        const [singleViewStuffyId,setSingleViewStuffyId] = useState({});
        const [userIdObj,setUserIdObj] =useState("");

    console.log('NavBar starting to render and useState finished setting defaults')

    return (
        <>
        <div className="viewBox">
        <div className='navBarBox'>
            <div className='homeShopContactUs'>
            {/* <div>{tokenObj.length}</div>     */}
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
            userIdObj={userIdObj}
            singleViewStuffyId={singleViewStuffyId}
            setSingleViewStuffyId={setSingleViewStuffyId}
            usernameObj={usernameObj}
            setUsernameObj={setUsernameObj} 
            stuffiesObj={stuffiesObj}
            setStuffiesObj={setStuffiesObj}
            reviewsObj={reviewsObj}
            setReviewsObj={setReviewsObj} />} />
            <Route path='/Contact.jsx' element={<Contact />} />
            <Route path='/Login.jsx' element={<Login
            userIdObj={userIdObj}
            setUserIdObj={setUserIdObj}
            usernameObj={usernameObj}
            setUsernameObj={setUsernameObj} 
            tokenObj={tokenObj}
            setTokenObj={setTokenObj}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn}/>} />
            <Route path='/ShoppingCart.jsx' element={<ShoppingCart
            setUserIdObj={setUserIdObj}
            userIdObj={userIdObj}
            usernameObj={usernameObj}
            setUsernameObj={setUsernameObj}
            tokenObj={tokenObj}
            setTokenObj={setTokenObj}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn} />} />
            <Route path='/Register.jsx' element={<Register
            userIdObj={userIdObj}
            setUserIdObj={setUserIdObj}
            usernameObj={usernameObj}
            setUsernameObj={setUsernameObj} 
            tokenObj={tokenObj}
            setTokenObj={setTokenObj}
            usernameLogIn={usernameLogIn}
            setUsernameLogIn={setUsernameLogIn}
            passwordLogIn={passwordLogIn}
            setPasswordLogIn={setPasswordLogIn}/>} />
       </Routes>
       
       </div>
      
        </>
    )
}