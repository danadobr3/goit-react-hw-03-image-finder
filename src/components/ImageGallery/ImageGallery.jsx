import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import cssgallery from './ImageGallery.module.css'


function ImageGallery({ items }) {
  return (
    <>
      <ul className={cssgallery.ImageGallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;



