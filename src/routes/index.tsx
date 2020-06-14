import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Dashboard from './Dashboard';
import PostDetails from './PostDetails';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/postDetails" component={PostDetails} /> 
    </Switch>
  </NativeRouter>
);