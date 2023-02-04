import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src="" alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};
