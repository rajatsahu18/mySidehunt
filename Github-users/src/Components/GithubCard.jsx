import React from 'react'
import styles from "./GithubCard.module.css"

const GithubCard = (item) => {
    return (
        <>
            <div className = {styles.card}>
                <img src= {item.item.avatar_url} alt=""/>
                <h4>Login: {item.item.login} </h4>
                <a href= {item.item.html_url}>URL</a>
                <p>Type: {item.item.type} </p>
            </div>
        </>
    )
}

export {GithubCard}
