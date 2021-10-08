import React, { Component } from 'react';
import FetchAPI from '../API/API';

export default class SearchBar extends Component {
  state = {
    searchInput: '',
  };

  formSubmit = e => {
    e.preventDefault();
    const { searchInput } = this.state;

    FetchAPI(searchInput)
      .then(data =>
        this.props.onSubmit({
          arrayImg: data.hits,
          searchInput: searchInput,
        }),
      )
      .finally(this.setState({ searchInput: '' }));
  };

  inputForm = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputForm}
          />
        </form>
      </header>
    );
  }
}
