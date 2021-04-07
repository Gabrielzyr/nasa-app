import React from 'react';
import { Route, Switch } from 'react-router-dom'
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
  </Switch>
)

export default Routes;