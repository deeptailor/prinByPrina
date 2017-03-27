import React from 'react';
import Instafeed from 'instafeed.js';

import {userId, accessToken} from '../data/images.jsx';

class Press extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(props);
    // var feed = new Instafeed({
    //   target: 'instafeed',
    //   get: 'tagged',
    //   tagName: 'prinbyprina',
    //   userId: userId,
    //   accessToken: accessToken
    // });
    // feed.run();
  }

  render(){
    return(
      <a href="https://www.instagram.com/oauth/authorize/?client_id=a57ca496932f44d49cda32c6913bf033&redirect_uri=REDIRECT-URI&response_type=token">click me</a>
    );
  }
}

export default Press;
