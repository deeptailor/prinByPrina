import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="splash">
        <div className='splash-overlay'>
          <div className="splash-main">
            <div className="splash-logo">
              <h1>PRIN</h1>
            </div>
            <ul className="splash-nav">
              <li>SS17</li>
              <li>SHOP</li>
              <li>ABOUT</li>
              <li>PRESS</li>
            </ul>
            <div className="splash-footer">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
