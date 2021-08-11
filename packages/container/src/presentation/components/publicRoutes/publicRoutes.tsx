import React, { lazy } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

const AuthLazy = lazy(async () => import('../../applications/auth/auth'))

const PublicRoutes: React.FC = () => (
    <Switch>
        <Route path="/">
            <AuthLazy />
        </Route>
        <Redirect to="/login" />
    </Switch>
)

export default PublicRoutes
