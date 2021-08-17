import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {AuthContext} from "../Context/AuthContextProvider"

const PrivateRoutes = ( {children, ...props} ) => {
    const {isAuth} = React.useContext(AuthContext)
    
    return isAuth ? (
        <Route {...props} > {children} </Route>
    ) : ( <Redirect to = "/login" /> )
}

export { PrivateRoutes }
