import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='about-info'>
        <h1 className='title'>About me</h1>
        <p>Hello, I'm Anthony! I'm a recent computer science graduate, majoring in software development. I have a strong foundation in algorithms, data structures and software design.</p>
        <h2 className='title'>What I'm working on now</h2>
        <hr />
        <ul>
          <li>Building my personal website</li>
          <li>Completing freecodecamp data structures & algorithms</li>
          <li>Looking into photography/FPV drones</li>
        </ul>
        <p></p>
        <h2 className='title'>Tools</h2>
        <hr />
        <h3 className='title'>Software</h3>
        <ul>
          <li>This website is hosted on Vercel, and uses the React framework.</li>
          <li>Coding: Visual Studio Code</li>
          <li>Painting: Krita</li>
        </ul>
        <h3 className='title'>Hardware</h3>
        <ul>
          <li>CPU: AMD Ryzen 5 3600</li>
          <li>GPU: XFX RX 6600</li>
          <li>Motherboard: Asrock B450M Pro4</li>
          <li>Memory: DDR4 HyperX 8GB 3200mhz x2</li>
          <li>SSD: Kingston NV1 512GB</li>
          <li>HDD: WD Green 5200RPM 1TB</li>
          <li>PSU: Steampunk PS-750SP 750w</li>
        </ul>
        <p></p>
      </div>
    </div>
  )
}

export default About