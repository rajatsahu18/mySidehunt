import React from 'react'
import {AuthContext} from "../Context/AuthContextProvider"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import styles from "./Styles/Login.module.css";

const Login = () => {
    const {isAuth, loginSuccess} = React.useContext(AuthContext)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError ] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const payload = {
            email,
            password
        }

        getUser(payload)
    }

    const getUser = (payload) => {
        axios.post("https://reqres.in/api/login", payload)
        .then((res) => {
            setIsLoading(false)
            loginSuccess(res.data.token);
        })
        .catch((err) => {
            setIsError(true)
            setIsLoading(false)
        })
    }
 
    return !isAuth ? (
        <div className = {styles.formContainer} >
            { isLoading ? (
                <div>...loading </div>
            ) : isError ? (
                <div> Something went wrong </div>
            ) : null }
            <form className = {styles.form} onSubmit = {handleSubmit} >
                <input type="text" 
                    placeholder = "Email"
                    value = {email}
                    onChange = { (e) => setEmail(e.target.value)}  
                />
                <br/>

                <input type="text" 
                    placeholder = "Password"
                    value = {password}
                    onChange = { (e) => setPassword(e.target.value)}  
                />
                <br/>
                <button className = {styles.submit} type="submit">Submit</button>

            </form>
        </div>
    ) : (
        <Redirect to = "/dashboard"  />
    )
}

export { Login }
