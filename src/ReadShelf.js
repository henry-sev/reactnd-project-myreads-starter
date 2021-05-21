import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class ReadShelf extends Component {
  render() {
    const  {books, onUpdateShelf} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
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

ReadShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
}

export default ReadShelf;