import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ButtonLoadMore from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    arrayImg: [],
    modalImg: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { length } = prevState.arrayImg;
    const { arrayImg } = this.state;

    if (length !== arrayImg.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSubmit = ({ arrayImg, searchInput }) => {
    this.setState({
      arrayImg: arrayImg,
      searchInput: searchInput,
    });
  };

  loadMore = moreImg => {
    const { arrayImg } = this.state;
    this.setState({
      arrayImg: [...arrayImg, ...moreImg],
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = e => {
    const { dataset, nodeName } = e.target;

    if (nodeName === 'IMG') {
      this.setState(({ showModal }) => ({
        modalImg: dataset.large,
        showModal: !showModal,
      }));
    }
  };

  render() {
    const { arrayImg, searchInput, showModal, modalImg } = this.state;

    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg} alt="" />
          </Modal>
        )}
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery arrayImg={arrayImg} openModal={this.openModal} />
        {arrayImg.length !== 0 && (
          <ButtonLoadMore searchInput={searchInput} loadMore={this.loadMore} />
        )}
      </>
    );
  }
}

export default App;
