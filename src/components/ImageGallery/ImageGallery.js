import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    arrayImg: PropTypes.array,
    openModal: PropTypes.func,
  };

  render() {
    const { arrayImg, openModal } = this.props;

    return (
      <ul className="ImageGallery" onClick={openModal}>
        <ImageGalleryItem arrayImg={arrayImg} />
      </ul>
    );
  }
}
