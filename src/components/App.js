import React, { Component } from 'react';

import hitsAPI from '../services/hitsAPI';

import Wrapper from './Wrapper/Wrapper';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from 'react-loader-spinner';
import Modal from './Modal/Modal';

export class App extends Component {
   state = {
      hits: [],
      currentPage: 1,
      searchQuery: '',
      isLoading: false,
      error: null,
      showModal: false,
      largeImage: null,
   };

   componentDidUpdate(prevProps, prevState) {
      const { searchQuery } = this.state;
      if (searchQuery !== prevState.searchQuery) {
         this.fetchHits();
      }
   }

   onChangeQuery = query => {
      this.setState({
         searchQuery: query,
         currentPage: 1,
         hits: [],
         error: null,
      });
   };

   fetchHits = () => {
      const { currentPage, searchQuery } = this.state;
      const options = { searchQuery, currentPage };

      this.setState({ isLoading: true });

      hitsAPI
         .fetchHits(options)
         .then(hits => {
            this.setState(prevState => ({
               hits: [...prevState.hits, ...hits],
               currentPage: prevState.currentPage + 1,
            }));
         })
         .catch(error => this.setState({ error }))
         .finally(() => {
            this.setState({ isLoading: false });
         });
   };

   scrollGallery = () => {
      window.scrollTo({
         top: document.documentElement.scrollHeight,
         behavior: 'smooth',
      });
   };

   toggleModal = () => {
      this.setState(({ showModal }) => ({
         showModal: !showModal,
      }));
   };

   activeImage = largeImageURL => {
      this.setState({ largeImage: largeImageURL });
      this.toggleModal();
   };

   render() {
      const { hits, isLoading, showModal, largeImage } = this.state;
      const shouldRenderLoadMoreBtn = hits.length > 0 && !isLoading;

      return (
         <Wrapper>
            <Searchbar onSubmit={this.onChangeQuery} />

            <ImageGallery hits={hits} onClickImage={this.activeImage} />

            {isLoading && (
               <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}
               />
            )}

            {showModal && (
               <Modal onClose={this.toggleModal}>
                  <img src={largeImage} alt="#" />
               </Modal>
            )}

            {shouldRenderLoadMoreBtn && (
               <Button onClick={this.fetchHits} onScroll={this.scrollGallery()} />
            )}
         </Wrapper>
      );
   }
}

export default App;
