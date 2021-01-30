import * as React from 'react';
import { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { BuildingTable } from './components/BuildingTable';
import { QueueDisplay } from './components/QueueDisplay/QueueDisplay';
import { ResourceDisplay } from './components/ResourceDisplay/ResourceDisplay'
import { Queue } from './queue/queue';
import { StoreProvider, rootStore } from "./stores/appContext"
import { BuildingType } from "app/game/types"
import { HeadQuarters } from './game/buildings';

console.log(rootStore);

// render react DOM
export const App = hot(({ history }) => {
  const userStore = rootStore.userStore;
  const headQuarters = userStore.towns[0].getBuilding(BuildingType.Headquarters) as HeadQuarters

  useEffect(() => {
    setInterval(() => {
      userStore.towns.forEach((town) => {
        town.queueManager.update()
      });
    }, 1000)
    // console.log("Loading?");    
    // processQueue();
  }, [])

  return (
    <StoreProvider>
      <Router history={history}>
        <Switch>
          <Route path="/" >
            <ResourceDisplay townId={0}/>
            <QueueDisplay townId={0}/>
            <BuildingTable townId={0}/>
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
});
