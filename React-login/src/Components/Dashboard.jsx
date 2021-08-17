import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
import styled from "styled-components"

const Wrapper = styled.div `
    background-color: #01D8FF;
    height: 674px;

    h1 {
        margin-left: 40%;
    }

    div {
        display: flex;
        gap: 20px;
        padding: 20px;
        justify-content: center;
    }

    button {
        padding: 5px 10px;
    }` 

const Dashboard = () => {

    const {logout} = React.useContext(AuthContext)
    const history = useHistory()

    const handlePage = () => {
        history.push("/dashboard/settings")
    }

    return (
        <Wrapper>
            <div>
                <button onClick = {handlePage}> Settings </button>
                <button onClick = {logout}> Logout </button>           
            </div>
            <h1>Welcome to Dashboard</h1>
        </Wrapper>
        
    )
}

export { Dashboard }
 