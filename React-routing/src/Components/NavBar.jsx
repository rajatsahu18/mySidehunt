import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./Styles/ProductTable.module.css"

const links = [
    {
        to: "/",
        title: "Home",
        exact: true
    },
    {
        to: "/allproducts",
        title: "All Products",
        exact: false
    }
]

const NavBar = () => {
    return (
        <div className = {styles.navBar}>
            {links.map(({to, title, exact}) => (
                <NavLink to = {to} key = {to} className = {styles.navLink} >
                    {title}
                </NavLink>
            ))}
            
        </div>
    )
}

export { NavBar }
