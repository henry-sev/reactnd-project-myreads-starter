import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Book from './Book'

class SearchResults extends Component {
  render() {
    const {books, onUpdateShelf, booksInShelf} = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map((book) => {
              const bookInShelf = booksInShelf.find(bookInShelf => (
                bookInShelf.id === book.id
              ));
              if (bookInShelf) {
                return (
                  <Book 
                    key={book.id} 
                    book={bookInShelf} 
                    onUpdateShelf={onUpdateShelf}
                  />
                )
              } else {
                return (
                  <Book 
                    key={book.id} 
                    book={book} 
                    onUpdateShelf={onUpdateShelf}
                  />
                )
              }
            })
          }
        </ol>
      </div>
    )
  }
}

export default SearchResults;