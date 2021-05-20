import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ListBooks from './ListBooks';

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <ListBooks />
      </div>
    )
  }
}

export default SearchBooks;