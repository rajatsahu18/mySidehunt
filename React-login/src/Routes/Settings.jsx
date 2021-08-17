import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Components/Styles/NavBar.module.css"


const Settings = () => {
    return (
        <div className = {styles.settings}>
            <h1>Settings</h1>
            <Link to = "/dashboard" >Back To Dashboard</Link>
        </div>
    )
}

export { Settings }
