import * as React from 'react';
import { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { BuildingTable } from './components/BuildingTable';
// import { ResourceDisplay } from './components/ResourceDisplay/ResourceDisplay'
import { StoreProvider, rootStore } from "./stores/appContext"

console.log(rootStore);

// render react DOM
export const App = hot(({ history }) => {

  useEffect(() => {
    // console.log("Loading?");    
    // processQueue();
  }, [])

  return (
    <StoreProvider>
      <Router history={history}>
        <Switch>
          <Route path="/" >
            {/* <ResourceDisplay /> */}
            <BuildingTable />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
});
