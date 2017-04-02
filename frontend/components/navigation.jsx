import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.urlPush = this.urlPush.bind(this);
  }

  urlPush(name){
    return (e) => {
      e.stopPropagation();
      this.props.router.push(name)
    }
  }

  render(){
    return(
      <div className="navigation">
        <div className="navigation-outer">
          <div className="navigation-main">
            <ul className="navigation-list">
              <li onClick={this.urlPush('/')}>HOME</li>
              <li onClick={this.urlPush('/main/ss17')}>SS17</li>
              <li onClick={this.urlPush('/main/ff16')}>FF16</li>
              <li onClick={this.urlPush('/main/ss15')}>SS15</li>
              <li onClick={this.urlPush('/main/ff15')}>FF15</li>
              <li onClick={this.urlPush('/main/shop')}>SHOP</li>
              <li onClick={this.urlPush('/main/press')}>PRESS</li>
              <li>ABOUT</li>
              <li>
                <a><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
          <div className="navigation-logo">
            <h1 onClick={this.urlPush('/')}>PRIN</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
