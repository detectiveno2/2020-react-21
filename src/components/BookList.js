import React, { Component } from "react";
import "./../css/BookList.css";
import {
  BrowserRouter as Switch,
  Router,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import classNames from 'classnames';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: "",
      hideForm: true
    };

    this.inputElement = React.createRef();

    this.onClick = this.onClick.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState({
      searchInputValue: this.inputElement.current.value
    });
    console.log(event.target);
  }
  
  showSearch() {
    this.setState({
      hideForm: false
    })
  }
  
  componentDidMount() {
    this.inputElement.current.focus();
  }

  componentDidUpdate() {}

  render() {
    const { searchInputValue, hideForm } = this.state;
    const { books } = this.props;
    
    const formClassName = classNames('SearchArea', {
      hide: hideForm,
      show: !hideForm
    });

    return (
      <div className="BookList">
        <Link to="/search" className="SearchBtn" onClick={this.showSearch}>Search something</Link>
        <div className={formClassName}>
          <form>
            <input type="text" ref={this.inputElement} placeholder="Type sth..." />
            <button onClick={this.onClick}>Search</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {searchInputValue &&
              books
                .filter(book => {
                  return book.title.indexOf(searchInputValue) !== -1;
                })
                .map(book => (
                  <tr>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>{book.price}</td>
                  </tr>
                ))}
            {!searchInputValue &&
              books.map(book => (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.description}</td>
                  <td>{book.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookList;
