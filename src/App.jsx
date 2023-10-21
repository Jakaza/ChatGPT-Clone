import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [message, setMessage] = useState(null)
  const [value, setValue] = useState("")
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)


  const handleSelectHistory = (title) =>{
    setValue("")
    setCurrentTitle(title)
    setMessage(null)
  }

  const getMessages =  async () => {

    const options ={
      method: "POST", 
      body: JSON.stringify({
        message: value
      }), 
      headers: {
        "Content-Type": "application/json"
      }
    }
    
    try {
      
      const res = await fetch('http://localhost:8000/completions', options)
      const data = await res.json()
      console.log(data);
      setMessage(data.choices[0].message)

    } catch (error) {
      console.log(error);
    }
  }

  const createNewChat = () =>{
    setValue("")
    setCurrentTitle(null)
    setMessage(null)
  }

  useEffect(()=>{

    console.log(currentTitle, value, message);

    if(!currentTitle && value && message){
      setCurrentTitle(value)
    }

    if(currentTitle && value && message){
      setPreviousChats((prev) =>(
        [...prev, {
          title: currentTitle,
          role: "user",
          content: value
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content
        }]
      ))
    }


  }, [message, currentTitle])

 const currentChat = previousChats.filter(previousChat => previousChat.title == currentTitle)

 const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))

 

  return (
    <div className='app'>
      <section className='side-bar'>
        <button onClick={createNewChat}>New chat</button>
        <ul className='history'>
          {uniqueTitles?.map((title, index )=> (
            <li className="history-list" key={index} onClick={()=>
              handleSelectHistory(title)
            }>{title}</li>
          ))}
         
        </ul>
        <nav>
          <p>Made by Themba</p>
        </nav>
      </section>
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
    </div>
  )
}

export default App
