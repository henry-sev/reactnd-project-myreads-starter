import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    currentReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks books={this.state} />
            )}
          />
          <Route path="/search" component={SearchBooks} />
          {/* {this.state.showSearchPage ? (
            <SearchBooks />
          ) : (
            <ListBooks />
          )} */}
        </div>
      </BrowserRouter>
      
    )
  }
}

export default BooksApp
