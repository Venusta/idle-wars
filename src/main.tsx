import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { App } from 'app';
import { resources } from 'app/game/resources';

// prepare history
const history = createBrowserHistory();
console.log(resources);


// render react DOM
ReactDOM.render(<App history={history} />, document.getElementById('root'));
