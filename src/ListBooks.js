import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CurrentReadingShelf from './CurrentReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';

class ListBooks extends Component {
  render() {
    const {books, onUpdateShelf} = this.props;
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentReadingShelf 
              books={currentlyReading}
              onUpdateShelf={onUpdateShelf}
            />
            <WantToReadShelf 
              books={wantToRead}
              onUpdateShelf={onUpdateShelf}
            />
            <ReadShelf 
              books={read}
              onUpdateShelf={onUpdateShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button >Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
}

export default ListBooks;