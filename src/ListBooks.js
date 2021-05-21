import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CurrentReadingShelf from './CurrentReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';

class ListBooks extends Component {
  render() {
    const {books} = this.props;
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
            <CurrentReadingShelf books={currentlyReading}/>
            <WantToReadShelf books={wantToRead} />
            <ReadShelf books={read} />
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

export default ListBooks;