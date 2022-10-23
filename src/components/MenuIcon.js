import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity, hideOnMobile, hideOnTablet }) => {

  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "hideOnMobile" : ""} ${hideOnTablet ? "hideOnMobile" : ""}`} to={link} end>
        <span className="position-absolute top-10 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon