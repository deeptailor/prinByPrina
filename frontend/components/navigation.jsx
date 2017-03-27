import React from 'react';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.urlPush = this.urlPush.bind(this);
    console.log(props);
  }

  urlPush(name){
    return (e) => (
      this.props.router.push(name)
    )
  }

  render(){
    return(
      <div className="navigation">
        <div className="navigation-outer">
          <div className="navigation-main">
            <ul className="navigation-list">
              <li onClick={this.urlPush('/')}>HOME</li>
              <li onClick={this.urlPush('/main/ss17')}>SS17</li>
              <li>FF16</li>
              <li>SHOP</li>
              <li>PRESS</li>
              <li>ABOUT</li>
              <li>
                <a><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
          <div className="navigation-logo" onClick={this.urlPush('/')}>
            PRIN
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
