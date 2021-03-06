//dependencies
import React from 'react';

//
import { Route, Switch } from 'react-router-dom';

//components

import App from './components/App';
import Home from './components/Home';
import Page404 from './components/Page404';
import Nova from './components/Nova';
import Rest from './components/Rest';





const AppRoutes = () =>

 <App>
 	<Switch>
 	  
 	  <Route path="/Nova" component={Nova} />
 	  <Route path="/Rest" component={Rest} />
      <Route path="/Home" component={Home} />
      <Route component={Page404} />
 	</Switch>
 </App>;


 export default AppRoutes;