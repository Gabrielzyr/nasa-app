import React from 'react';
import { Route } from './Route';

import { Switch } from 'react-router-dom'
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { Searcher } from '../pages/Searcher';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signIn" component={SignIn} />
    <Route exact path="/signUp" component={SignUp} />
    <Route exact path="/searcher" component={Searcher} isPrivate />
    <Route exact path="/favorites" component={Favorites} isPrivate />
    <Route exact path="/details/:date+" component={Details} isPrivate/>

  </Switch>
)

export default Routes;