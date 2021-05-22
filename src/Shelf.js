import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
  render () {
    const {shelf, books, onUpdateShelf} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => (
                <Book 
                  key={book.id} 
                  book={book} 
                  onUpdateShelf={onUpdateShelf}
                />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
}

export default Shelf;