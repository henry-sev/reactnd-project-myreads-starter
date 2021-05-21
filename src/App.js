import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    booksInShelves: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({booksInShelves: books})
      })
  }

  handleUpdateShelf = (shelf, book) => {
    if (shelf === "currentlyReading") {
      this.setState(currentState => ({
        currentlyReading: currentState.currentlyReading.concat(book),
      }))
    } 
    else if (shelf === "wantToRead") {
      this.setState(currentState => ({
        wantToRead: currentState.wantToRead.concat(book),
      }))
    }
    else if (shelf === "read") {
      this.setState(currentState => ({
        read: currentState.read.concat(book),
      }))
    }
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks 
              // books={this.state} 
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
