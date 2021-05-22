import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchBooks extends Component {
  state = {
    searchResultBooks: [],
  }

  handleUpdateInput = (value) => {
    if (value) {
      BooksAPI.search(value)
        .then(books => {
          if(Array.isArray(books)) {
            this.setState({searchResultBooks: books});
          } else {
            this.setState({searchResultBooks: []});
          }
        })
    } else {
      this.setState({searchResultBooks: []});
    }
  }    

  render() {
    return (
      <div className="search-books">
        <SearchBar 
          onUpdateInput={this.handleUpdateInput} 
        />
        <SearchResults 
          books={this.state.searchResultBooks}
          onUpdateShelf={this.props.onUpdateShelf}
          booksInShelf={this.props.booksInShelf}
        />
      </div>
    )
  }
}

SearchBooks.propTypes = {
  onUpdateShelf: PropTypes.func.isRequired,
  booksInShelf: PropTypes.array.isRequired,
}

export default SearchBooks;