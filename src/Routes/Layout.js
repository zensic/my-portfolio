import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <Link to={``}>Home</Link>
        <Link to={``}>About</Link>
        <Link to={``}>Projects</Link>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout