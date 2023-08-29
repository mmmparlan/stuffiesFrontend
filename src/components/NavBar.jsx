import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';
import {Routes,Route,Link} from 'react-router-dom'



export default function NavBar(){

    return (
        <>
        <div className='navBarBox'>
        <Link to='/Home.jsx'>&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
        <Link to='/Shop.jsx'>&nbsp;&nbsp;Shop&nbsp;&nbsp;</Link>
        <Link to='/Contact.jsx'>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</Link>
        <Link to='/Login.jsx'>&nbsp;&nbsp;Login&nbsp;&nbsp;</Link>
        <Link to='/ShoppingCart.jsx'>&nbsp;&nbsp;MyCart&nbsp;&nbsp;</Link>
        </div>

        <Routes className='navBarRoutes'>
            <Route path='/Home.jsx' element={<Home />} />
            <Route path='/Shop.jsx' element={<Shop />} />
            <Route path='/Contact.jsx' element={<Contact />} />
            <Route path='/Login.jsx' element={<Login />} />
       </Routes>

       <Routes className='navBarCartRoute'>
            <Route path='/ShoppingCart.jsx' element={<ShoppingCart />} />
       </Routes>
        </>
    )
}