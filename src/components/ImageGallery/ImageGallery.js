import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { arrayImg, openModal } = this.props;

    return (
      <ul className="ImageGallery" onClick={openModal}>
        <ImageGalleryItem arrayImg={arrayImg} />
      </ul>
    );
  }
}
