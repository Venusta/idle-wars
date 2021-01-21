import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { BuildingTable } from './components/BuildingTable';
import { ResourceDisplay } from './components/ResourceDisplay/ResourceDisplay'
import { StoreProvider } from "./stores/appContext"

// render react DOM
export const App = hot(({ history }) => {
  return (
    <StoreProvider>
      <Router history={history}>
        <Switch>
          <Route path="/" >
            <ResourceDisplay />
            <BuildingTable />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
});
