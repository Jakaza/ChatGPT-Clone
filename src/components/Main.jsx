import React from 'react'

function Main(props) {

    const {currentTitle, getMessages, value } = props;

  return (
    <section className='main'>
    {!currentTitle && <h1>JakazaGPT</h1>}
    <ul className='feed'>
      {currentChat?.map((chat, index) => (
        <li key={index}>
          <p className="role">{chat.role}</p>
          <p className="content">{chat.content}</p>
        </li>
      ))}
    </ul>
    <div className='bottom-section'> 
      <div className='input-container'>
        <input  value={value} onChange={(e)=> setValue(e.target.value)} />
        <div onClick={getMessages} id='submit'>
        ➢
        </div>
      </div>
      <p className='info'>
      Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT September 25 Version
      </p>
    </div>
  </section>
  )
}

export default Main