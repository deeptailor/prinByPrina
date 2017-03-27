import React from 'react';
import Navigation from './navigation.jsx';


const App = (props) => (
  <div className="app-container">
    <Navigation router={props.router}/>
    {props.children}
  </div>
);

export default App;
