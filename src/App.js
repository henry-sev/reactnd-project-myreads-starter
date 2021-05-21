import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    booksInShelves: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({booksInShelves: books})
      })
  }

  handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf
        this.setState(currentState => ({
          booksInShelves: currentState.booksInShelves.concat(book),
        }));
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.booksInShelves}
            />
            )}
          />
          <Route path="/search" render={() => (
            <SearchBooks onUpdateShelf={this.handleUpdateShelf} />
          )} />
        </div>
      </BrowserRouter>
      
    )
  }
}

export default BooksApp
