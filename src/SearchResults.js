import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Book from './Book'

class SearchResults extends Component {
  render() {
    const {books} = this.props.books;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books ? books.map((book) => (
            <Book />
          )) : ''}
        </ol>
      </div>
    )
  }
}

export default SearchResults;