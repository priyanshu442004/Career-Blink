import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
const NavBar = () => {

    const navigate = useNavigate();

    return (   
        <div className='navbar'>
           {/* <img src="" alt="" /> */}
           <ul>
            <NavLink to='/'><li>LOGO</li></NavLink>
            <NavLink to='/ScanResume'><li>Scan Resume</li></NavLink>
            <NavLink to='/MockInterview'><li>Mock Interview</li></NavLink>
            <NavLink to='/PrepMaterial'><li>Prep Material</li></NavLink>
            <NavLink to='/EnglishCommunication'><li>English Communication</li></NavLink>
            <NavLink to='/Login'><li>Login</li></NavLink>
            <NavLink to='/Signup'><li>Signup</li></NavLink>
            <button class="bg-indigo-500 opacity-100 ...">Click</button>
           </ul>
           {/* <button onClick={() => navigate('/About',{replace:true})}>Get Started</button> */}
        </div>
    )
} 
export default NavBar ;