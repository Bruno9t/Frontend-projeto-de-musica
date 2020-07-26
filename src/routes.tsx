import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth/register" component={SignUp} />
        <Route path="/auth/login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
