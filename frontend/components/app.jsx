import React from 'react';
import Navigation from './navigation.jsx';


const App = ({ children }) => (
  <div className="app-container">
    <Navigation/>
    {children}
  </div>
);

export default App;
