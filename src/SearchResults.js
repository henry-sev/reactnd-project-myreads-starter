import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Book from './Book'

class SearchResults extends Component {
  render() {
    const {books, onUpdateShelf} = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <Book 
              key={book.id} 
              book={book} 
              onUpdateShelf={onUpdateShelf}
            />
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchResults;