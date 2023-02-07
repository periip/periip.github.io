import { useState, useEffect } from 'react'
import './App.css';

const Cover = () => {
  return (
    <section className='title-page'>
      <div className='title-container'>
        <div className='subtitle' style={{alignItems: 'flex-end'}}>
          Hello! I'm
        </div>
        <div className='title'>
          Perry Huang,
        </div>
        <div className='subtitle' style={{height: '10%'}}>
          and welcome to my personal website!
        </div>
        <div className='description'>
          I'm a first year UBC student hoping to pursue a Bachelor's in Computer Science. I am currently learning React and have experience in React Native, Javascript, and Java. I love to game, discover new music, exercise, and occasionally read books.
        </div>
      </div>
      <div className='image-container'>
        <div className='image'>
          <a href="https://www.vecteezy.com/free-vector/lighthouse" target="_blank" rel="noreferrer">
            <img src={require('./assets/lighthouse-logo1.png')} alt='' width='230' height='250'/>
          </a>
        </div>
      </div>
    </section>
  )
}

const Experience = () => {
  return (
    <section className='title-page'>
      <header className='header-container'>
        <h1 className='header'>
          Experience
        </h1>
      </header>
    </section>
  )
}

const App = () => {
  return (
    <div>
      <Cover />
      <Experience />
    </div>
  )
}

export default App;
