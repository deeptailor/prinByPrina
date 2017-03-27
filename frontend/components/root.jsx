import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import App from './app.jsx'
import Splash from './splash.jsx';
import Navigation from './navigation.jsx';
import Carousel from './carousel.jsx';
import Press from './press.jsx';

import { ss17Line, ff16Line } from '../data/images.jsx'

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/main' component={App}>
      <Route path="/main" component={Navigation}></Route>
      <Route path='ss17' component={() => (<Carousel images={ss17Line}/>)}></Route>
      <Route path='ff16' component={() => (<Carousel images={ff16Line}/>)}></Route>
      <Route path='press' component={Press}></Route>
    </Route>
  </Router>
);

export default Root;
