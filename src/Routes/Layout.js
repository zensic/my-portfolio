import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-con">
        <nav>
          <Link to={``}>Home</Link>
          <Link to={`About`}>About</Link>
          <Link to={`projects`}>Projects</Link>
          <Link to={`contact`}>Contact</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout