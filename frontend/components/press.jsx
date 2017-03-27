import React from 'react';

import {userId, accessToken} from '../data/images.jsx';

class Press extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul className="press-container">
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/A_dO8GSTCLs" frameBorder="0" allowFullScreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/ZwzSnO4Ni2U" frameBorder="0" allowFullScreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/_Gyri-7cKns" frameBorder="0" allowFullScreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/Pmpo8yC5Q60" frameBorder="0" allowFullScreen></iframe></li>
        <li><iframe width="560" height="315" src="https://www.youtube.com/embed/d60oHJnyqmI" frameBorder="0" allowFullScreen></iframe></li>
      </ul>
    );
  }
}

export default Press;
