import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  onClickImage,
}) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={webformatURL}
      alt={tags}
      className={s.ImageGalleryItemImage}
      onClick={() => onClickImage(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
