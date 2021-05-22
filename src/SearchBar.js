import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Debounce} from 'react-throttle';
import {Link} from 'react-router-dom';

class SearchBar extends Component {
  handleUpdateInput = (value) => {
    this.props.onUpdateInput(value);
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" >Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <Debounce time="400" handler="onChange">
            <input 
              type="text" 
              onChange={(e) => { this.handleUpdateInput(e.target.value); }} 
              placeholder="Search by title or author"
            />
          </Debounce>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onUpdateInput: PropTypes.func.isRequired,
}

export default SearchBar;