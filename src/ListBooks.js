import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CurrentReadingShelf from './CurrentReadingShelf';
import WantToReadShelf from './WantToReadShelf';
import ReadShelf from './ReadShelf';

class ListBooks extends Component {
  render() {
    const {books} = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentReadingShelf books={books.currentlyReading}/>
            <WantToReadShelf books={books.wantToRead} />
            <ReadShelf books={books.read} />
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