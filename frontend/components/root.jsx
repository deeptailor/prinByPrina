import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './app.jsx'
import Splash from './splash.jsx';
import Navigation from './navigation.jsx';
import Carousel from './carousel.jsx';
import Press from './press.jsx';
import Shop from './shop.jsx';

import { ss17Line, ff16Line, ss15Line, ff15Line } from '../data/images.jsx';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/main' component={App}>
      <Route path="/main" component={Navigation}></Route>
      <Route path='ss17' component={() => (<Carousel images={ss17Line}/>)}></Route>
      <Route path='ff16' component={() => (<Carousel images={ff16Line}/>)}></Route>
      <Route path='ss15' component={() => (<Carousel images={ss15Line}/>)}></Route>
      <Route path='ff15' component={() => (<Carousel images={ff15Line}/>)}></Route>
      <Route path='press' component={Press}></Route>
      <Route path='shop' component={Shop}></Route>
    </Route>
  </Router>
);

export default Root;
