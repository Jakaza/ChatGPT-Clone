import React from 'react'

function SideBar(props) {

    const {uniqueTitles, createNewChat , handleSelectHistory } = props;

  return (
    
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


  )
}

export default SideBar