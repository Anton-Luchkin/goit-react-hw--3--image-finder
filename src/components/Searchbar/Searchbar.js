import React, { Component } from 'react';

import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
