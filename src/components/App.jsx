import { Component } from 'react';
// import { fetchApi } from 'services/fetchApi';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader />
      </div>
    );
  }
}
