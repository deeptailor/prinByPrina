import React from 'react';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.urlPush = this.urlPush.bind(this);
  }

  urlPush(name){
    return (e) => (
      this.props.router.push(name)
    )
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
              <li onClick={this.urlPush('/main/ss17')}>SS17</li>
              <li onClick={this.urlPush('/main/shop')}>SHOP</li>
              <li onClick={this.urlPush('/main/about')}>ABOUT</li>
              <li onClick={this.urlPush('/main/press')}>PRESS</li>
            </ul>
            <div className="splash-footer">
              <a><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
              <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
