import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Home } from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signIn" component={SignIn} />
    <Route exact path="/signUp" component={SignUp} />
  </Switch>
)

export default Routes;