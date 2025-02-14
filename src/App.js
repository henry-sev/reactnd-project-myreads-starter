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
        BooksAPI.getAll()
          .then(books => {
            this.setState({booksInShelves: books})
          })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.booksInShelves}
              onUpdateShelf={this.handleUpdateShelf}
            />
            )}
          />
          <Route path="/search" render={() => (
            <SearchBooks 
              onUpdateShelf={this.handleUpdateShelf}
              booksInShelf={this.state.booksInShelves}
            />
          )} />
        </div>
      </BrowserRouter>
      
    )
  }
}

export default BooksApp
