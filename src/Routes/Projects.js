import React from 'react'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1 className='title'>Projects</h1>
      <div className='project-grid'>
        <div className='project'>
          <div className='project-title'>Project name</div>
          <div className='project-desc'>Short description</div>
          <button>Link</button>
        </div>
        <div className='project'>
          <div className='project-title'>Project name</div>
          <div className='project-desc'>Short description</div>
        </div>
        <div className='project'>
          <div className='project-title'>Project name</div>
          <div className='project-desc'>Short description</div>
        </div>
      </div>
    </div>
  )
}

export default Projects