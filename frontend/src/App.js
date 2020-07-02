import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import MyUser from './places/pages/MyUser';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/peoples/:name" exact>
          <UserPlaces />
        </Route>
        <Route path="/Professor/:id" exact>
          <MyUser />
        </Route>
      </Switch>
    );

  return (
 
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
  );
};

export default App;
