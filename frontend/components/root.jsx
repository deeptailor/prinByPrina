import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import Splash from './splash.jsx';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
  </Router>
);

export default Root;
