import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import styles from "../Components/Styles/NavBar.module.css"

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/dashboard",
        title: "Dashboard"
    }
]

const NavBar = () => {

    const {isAuth} = React.useContext(AuthContext)

    return (
        <div className = {styles.navbar} >
            {links.map(( {to, title }) => (
                <NavLink className = {styles.navlink} to = {to} key = {title} exact >
                    {title}
                </NavLink>
            ))}

            { !isAuth && <NavLink className = {styles.navlink} to = "/login" exact>
                Login
            </NavLink> }
        </div>
    )
}

export { NavBar}
