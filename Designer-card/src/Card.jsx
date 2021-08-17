import React from 'react'
import styles from './App.modules.css'

const Card = () => {
    return (
        <div class = "app">
            <span class = "card_span">RO</span>
            <img class = "img" src = "https://www.clipartkey.com/mpngs/m/250-2504091_pictures-of-business-woman-professional-indian-girl-png.png" alt = "image"/>
            <h3>Ricky Park</h3>
            <h5>New York</h5>
            <p>User interface designer and front-end developer</p>
        <div class = "card_button">
            <button>Message</button>
            <button>Following</button>
        </div>
        <div class = "card_skills">
            <h5>Skills</h5>
            <button>UI/UX</button>
            <button>Front End Development</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>React</button>
            <button>Node</button>
        </div>
    </div>
    )
}

export default Card
