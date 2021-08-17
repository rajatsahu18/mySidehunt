import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {PrivateRoutes} from "../Components/PrivateRoutes"
import { Dashboard } from '../Components/Dashboard'
import { Home } from '../Components/Home'
import { Settings } from './Settings'
import {Login} from "../Components/Login"

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/" >
                    <Home/>
                </Route>

                <Route path = "/login">
                    <Login/>
                </Route>

                <PrivateRoutes path = "/dashboard" exact >
                    <Dashboard/>
                </PrivateRoutes>

                <PrivateRoutes path = "/dashboard/settings"  >
                    <Settings/>
                </PrivateRoutes>

                <Route>
                    <h1>Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export { AllRoutes }
