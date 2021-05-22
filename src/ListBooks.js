import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
  render() {
    const {books, onUpdateShelf} = this.props;
    const shelves = [
      {title: "Currently Reading", shelf: "currentlyReading"},
      {title: "Want to Read", shelf: "wantToRead"},
      {title: "Read", shelf: "read"},
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            shelves.map(shelf => (
              <Shelf 
                key={shelf.shelf}
                shelf={shelf}
                books={books.filter(book => book.shelf === shelf.shelf)}
                onUpdateShelf={onUpdateShelf}
              />
            ))
          }
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