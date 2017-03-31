import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
    this.state = {isModalOpen: false, imageUrl:'', id:null};
  }

  nextPicture(e){
    e.stopPropagation();
    let next = this.state.id + 1;
    if(next === this.props.images.length){
      next = 0;
    }
    let imageUrl = this.props.images[next];
    this.setState({isModalOpen:true, imageUrl: imageUrl, id:next});
  }

  prevPicture(e){
    e.stopPropagation();
    let prev = this.state.id - 1;
    if(prev === -1){
      prev = this.props.images.length-1;
    }
    let imageUrl = this.props.images[prev];
    this.setState({isModalOpen:true, imageUrl: imageUrl, id:prev});
  }

  stopPropagation(e){
    e.stopPropagation();
  }

  openModal({src, id}){
    return () => {
      this.setState({isModalOpen: true, imageUrl: src, id:id})
    }
  }

  closeModal(e){
    e.stopPropagation();
    this.setState({isModalOpen: false, imageUrl:'', id:null});
  }

  renderModal(){
    if(this.state.isModalOpen){
      return(
        <div className="modal-container" onClick={this.closeModal}>
          <div className="modal-inner-container">
            <img className="modal-image" src={this.state.imageUrl}></img>
            <div className="modal-image-overlay">
              <div className="modal-direction" onClick={this.prevPicture}><i className="fa fa-chevron-left" aria-hidden="true"></i></div>
              <div className="modal-direction" onClick={this.nextPicture}><i className="fa fa-chevron-right" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      )
    }
  }

  renderImages(){
    return this.props.images.map((e,i) => (
      <div key={`image-${i}`} onClick={this.openModal({src:e, id: i})} className="carousel-image"><img src={e}></img></div>
    ));
  }

  render(){
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      touchMove: true,
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
