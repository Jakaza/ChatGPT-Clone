import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className='app'>
      <section className='side-bar'>
        <button>New chat</button>
        <ul className='history'>
          <li>Jakaza</li>
          <li>Jakaza</li>
        </ul>
        <nav>
          <p>Made by Themba</p>
        </nav>
      </section>
      <section className='main'>
        <h1>Jakaza GPT</h1>
        <ul className='feed'>

        </ul>
        <div className='bottom-section'> 
          <div className='input-container'>
            <input />
            <div id='submit'>
            ➢
            </div>
          </div>
          <p className='info'>
          Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
