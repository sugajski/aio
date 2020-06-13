import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Dashboard from './Dashboard';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </NativeRouter>
);