import React from 'react'
import './Navbar.css'
const Navbar = ()=>{
    return (
    <div className='navbar'> 
        <div className='nav-content'>
        <div className='iconLog'>
            <div className='logo'>
            <img src={require("./images/logo.png")} alt='imaggggee' />
            </div>
            <div className='invest'>
                <a href='google.com' >
                    <button className='investbut'>
                    invest now
                    </button>
                    <i class="bi bi-plus-circle"></i>
                </a>
                    
               
            </div>

        </div>
        <div className='searchBar'>
            <div   className='searchBarEx'>
            <input placeholder='Serach For City'/>
            <button><i class="bi bi-search "></i></button>
            </div>

           
        </div>
        <div className='menu'>
            <div className='menu-img'>
                <img src={require('./images/Mask Group 17.png')}/>
            </div>
            {/* menue section */}
            <i class="bi bi-list" ></i>
        </div>
        </div>
    </div>
     )  
}

export default Navbar

