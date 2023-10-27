import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/img/logo.svg'
import Logo2 from '../../assets/images/img/logo2.svg'
import './navbar.css'
const Navbar = ({setsearchWord}) => {
  const location = useLocation()
  if (location.pathname === '/'){
     return (
      <div>
      <div className="navbar_cover">
            <div className="logo_cover">
                <NavLink to={'/'} className='nav_icon'>
                    <img src={Logo2} alt="" />
                </NavLink>
            </div>
            <div className="section_cover">
                  <NavLink to={'/markazlar'} className='navs'>Izlash</NavLink>
                  <NavLink to={'/'} className='navs'>Markazlar</NavLink>
                  <NavLink to={'/map'} className='navs'>Xarita</NavLink>
                  <NavLink to={'/kirish'} ><button className='enter'>Kirish</button></NavLink>
            </div>
      </div>
  </div>
     )
  }
     
  return (
    <div>
        <div className="navbar_cover">
              <div className="logo_cover">
                  <NavLink to={'/'} className='nav_icon'>
                      <img src={Logo2} alt="" />
                  </NavLink>
              </div>
              <div className="navbar_input_cover">
                   <input onChange={(e)=>setsearchWord(e.target.value)}  type="text" className="education_search" />
              </div>
              <div className="section_cover">
                    <NavLink to={'/markazlar'} className='navs'>Izlash</NavLink>
                    <NavLink to={'/'} className='navs'>Markazlar</NavLink>
                    <NavLink to={'/map'} className='navs'>Xarita</NavLink>
                    <NavLink to={'/kirish'} ><button className='enter'>Kirish</button></NavLink>
              </div>
        </div>
    </div>
  )
}

export default Navbar