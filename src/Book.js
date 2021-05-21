import React, {Component} from 'react';

class Book extends Component {
  handleUpdateShelf = (e) => {
    console.log(e.target.value)
    this.props.onUpdateShelf(e.target.value, [this.props.book])
  }

  render() {
    const {book} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleUpdateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" onChange={this.handleUpdateShelf}>Currently Reading</option>
                <option value="wantToRead" onChange={this.handleUpdateShelf}>Want to Read</option>
                <option value="read" onChange={this.handleUpdateShelf}>Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {
              book.authors ? book.authors.map(author => (
                <div key={author}>{author}</div>
              )) : ''
            }
          </div>
        </div>
      </li>
    )
  }
}

export default Book;