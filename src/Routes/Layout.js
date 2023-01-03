import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-con">
        <nav>
          <Link to={``}>Home</Link>
          <Link to={`about`}>About</Link>
          <Link to={`projects`}>Projects</Link>
          <a href="https://github.com/zensic" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout