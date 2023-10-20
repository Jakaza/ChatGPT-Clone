import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className='app'>
      <section className='side-bar'>
        <button>New chat</button>
        <ul className='history'>

        </ul>
        <nav>
          <p>Made by Themba</p>
        </nav>
      </section>
      <section className='main'></section>
    </div>
  )
}

export default App
