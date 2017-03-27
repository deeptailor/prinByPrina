import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {isModalOpen: false, imageUrl:''};
  }

  openModal(src){
    return () => {
      this.setState({isModalOpen: true, imageUrl: src})
    }
  }

  closeModal(e){
    e.stopPropagation();
    this.setState({isModalOpen: false, imageUrl:''});
  }

  renderModal(){
    if(this.state.isModalOpen){
      return(
        <div className="modal-container" onClick={this.closeModal}>
          <img src={this.state.imageUrl}></img>
        </div>
      )
    }
  }

  renderImages(){
    return this.props.images.map((e,i) => (
      <div key={`image-${i}`} onClick={this.openModal(e)}className="carousel-image"><img src={e}></img></div>
    ));
  }

  render(){
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,
    }

    return (
      <div>
      	<div className='carousel-container'>
        	<Slider className="carousel-outer" {...settings}>
          	{this.renderImages()}
          </Slider>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Carousel;
