import React from 'react'

export const AuthContext = React.createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false)
    const [token, setToken] = React.useState("")

    const loginSuccess = (token) => {
        setIsAuth(true)
        setToken(token)
    }

    const logout = () => {
        setIsAuth(false)
        setToken("")
    }

    const value = {
        isAuth,
        token,
        loginSuccess,
        logout
    }

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }
