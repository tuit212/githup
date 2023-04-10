import React from 'react' 
import {BsGithub} from 'react-icons/bs'
import {AiFillCaretDown} from 'react-icons/ai'
import {FiBell , FiPlus} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav className='navbar'>
        {/* left */}
        <div className="navLeft">
            <BsGithub className='logo' />

            {/* input */}
            <div>
                <input type="search"  placeholder='Search or jump to ...' />
            </div>
        </div>
        {/* center */}
        <div className="navCenter">
            <NavLink to='/pull' className='links' >Pull requests</NavLink>
            <NavLink to='/issues' className='links'>Issues</NavLink>
            <NavLink to='/codespaces' className='links'>Codespaces</NavLink>
            <NavLink to='/marketplace' className='links'>Marketplace</NavLink>
            <NavLink to='/explore' className='links'>Explore</NavLink>
        </div>
        {/* right */}
        <div className="navRight">
            <FiBell className='bell' />
            <div className="navRightIcons">
                <FiPlus className='icon' />
                <AiFillCaretDown className='down' />
            </div>
            <div className="navRightIcons">
                <img src="https://images.pexels.com/photos/6390058/pexels-photo-6390058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <AiFillCaretDown className='down' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar