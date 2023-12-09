import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

import cssgallitem from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
    
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
    
    
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className={cssgallitem.ImageGalleryItem}>
        <img
          onClick={this.onModal}
          className={cssgallitem.ImageGalleryItem_image}
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}



export default ImageGalleryItem;