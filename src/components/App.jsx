import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/services';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

import Notiflix from 'notiflix';

import cssapp from './App.module.css';

class App extends Component {
  state = {
    inputData: '',
    items: [],
    status: 'idle',
    totalHits: 0,
    page: 1,
    loadingMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { inputData, page } = this.state;

    if (prevState.inputData !== inputData || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchImages(inputData, page);

        this.setState((prevState) => ({
          items: page === 1 ? hits : [...prevState.items, ...hits],
          totalHits,
          status: 'resolved',
        }));

      } catch (error) {
        this.setState({ status: 'rejected' });
      } finally {
        this.setState({ loadingMore: false });
      }
    }
  }

  handleSubmit = async (inputData) => {
    if (inputData.trim() === '') {
      Notiflix.Notify.info('You cannot search by an empty field, try again.');
      return;
    }

    this.setState({ inputData, page: 1, items: [], loadingMore: false });
  };

  onNextPage = () => {
  this.setState(prevState => ({ page: prevState.page + 1, loadingMore: true }));
};

  render() {
    const { totalHits, items, loadingMore } = this.state;

    return (
      <div className={cssapp.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {items.length > 0 && (
        <ImageGallery page={this.state.page} items={items} />
      )}
      {loadingMore && <Loader />}
      {items.length === 0 && <p>No results found.</p>}
      {totalHits > items.length && totalHits > 12 && !loadingMore && (
        <Button type="button" onClick={this.onNextPage} />
      )}
      </div>
    );
  }
}

export default App;