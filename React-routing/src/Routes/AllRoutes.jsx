import React from 'react'
import {Route, Switch } from 'react-router-dom'
import AllProducts from './AllProducts'
import { Home } from './Home'
import ProductDetails from './ProductDetails'

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route exact path = "/allproducts">
                    <AllProducts/>
                </Route>
                <Route exact path = "/productDetails/:id">
                    <ProductDetails/>
                </Route>
                <Route>
                    <h1>Error 404</h1>
                </Route>
            </Switch>
        </div>
    )
}

export { AllRoutes }
