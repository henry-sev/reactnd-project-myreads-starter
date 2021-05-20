import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;