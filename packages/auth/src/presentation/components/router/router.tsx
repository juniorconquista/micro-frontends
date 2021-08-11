import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
