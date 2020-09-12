import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

const ImageGallery = ({ hits, onClickImage }) => (
  <ul className={s.ImageGallery}>
    {hits.map(({ id, ...props }) => (
      <ImageGalleryItem key={id} onClickImage={onClickImage} {...props} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
