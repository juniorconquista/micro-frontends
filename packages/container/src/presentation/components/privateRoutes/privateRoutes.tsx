import React, { lazy } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

const StoreLazy = lazy(async () => import('../../applications/store/store'))
const ShoppingCartLazy = lazy(async () => import('../../applications/shopping-cart/shopping-cart'))

const PrivateRoutes: React.FC = () => (
    <Switch>
        <Route exact path="/store">
            <StoreLazy />
        </Route>
        <Route exact path="/shopping-cart">
            <ShoppingCartLazy />
        </Route>
        <Route exact path="/not-found">
            <h1>not-found</h1>
        </Route>
        <Redirect to="not-found" />
    </Switch>
)

export default PrivateRoutes
