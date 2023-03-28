import React from 'react'
import "./Header.css"
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import { Link } from 'react-router-dom'
function Header() {

  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
  <path d="M12 16.5l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5z" fill="currentColor"/>
</svg>
                                                        
  return (
    <div className='headerDiv'>
        <div>
            <img src={Logo} alt="Shineditz" className='headerlogo' />
        </div>
        <div className='headermenu'>
            <ul>
                <li className='dropdown'>
                  <div className='dropbtn'>Services&nbsp;{arrow}</div>
                  <div className='dropdown-content'>
                    <Link className="drpdwnlink" to="/serives">Clipping path</Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                  </div>
                </li>
                
                <li>Samples</li>
                <li>Pricing</li>
                <li>About Us</li>
          </ul>
        </div>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <div className='contactus-btn'>
           Contact us
        </div>
        </Link> 
    </div>
  )
}

export default Header