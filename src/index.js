import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './css/index.css';
import Home from './views/Home';

import FlipBook from './views/FlipBook';






const routing = (
	<Router>
	  <Switch>
	      <Route exact path="/" component={Home} />
	      <Route exact path="/book" component={FlipBook} />
	  </Switch>
  	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))



