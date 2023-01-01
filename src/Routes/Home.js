import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-desc'>
        <div className='home-desc-con'>
          <h1 className='title'>Hi, I am Anthony!</h1>
          <h3 className='details'>Welcome to my website 😊</h3>
          <h3 className='details'>I'm a CS graduate, software development major. I build full stack apps using tech like React, Node, and .NET. I love drawing, game dev and taekwondo</h3>
        </div>
      </div>
      <div className='home-img'>
        <img src="assets/coding.png" alt="Coding" />
      </div>
    </div>
  )
}

export default Home