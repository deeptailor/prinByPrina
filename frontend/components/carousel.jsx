import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component{
  constructor(props){
    super(props);
  }

  renderImages(){
    return this.props.images.map((e,i) => (
      <div key={`image-${i}`}className="carousel-image"><img src={e}></img></div>
    ));
  }

  render(){
    var settings = {
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,
    }

    return (
    	<div className='carousel-container'>
      	<Slider className="carousel-outer" {...settings}>
        	{this.renderImages()}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
