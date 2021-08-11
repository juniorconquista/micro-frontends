import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
)

export default Router
