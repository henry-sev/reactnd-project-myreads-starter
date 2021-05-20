import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default SearchBooks;