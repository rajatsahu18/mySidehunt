import React from 'react'
import { getApiUser } from './gitApiUser'
import { GithubCard } from './GithubCard'
import styles from "./GithubApi.module.css"

const GithubApi = () => {
    const [query, setQuery] = React.useState("masai")
    const [user, setUser] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)

    React.useEffect(() => {
        handleClick()
    },[])

    const handleChange = (e) => {
        const {value} = e.target
        setQuery(value)
    }

    const handleClick = () => {
        setIsLoading(true)
        getApiUser(query).then((res) => {
            const {items} = res.data
            setUser(items)
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <div>
            {isLoading && <p>...loading</p> }
            {isError && <p>something went wrong</p> }
            <input 
                type="text"
                name = "user"
                value = {query}
                onChange = {handleChange}
                className = {styles.input}
            />
            <button onClick = {handleClick} className = {styles.button} >SEARCH</button>

            <div>
                {user?.map((item) => {
                    return <GithubCard key = {item.id} item = {item} />
                })}
            </div>
        </div>
    )
}

export  {GithubApi}
