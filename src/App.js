import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import ApiBookList from "./components/api/ApiBookList.js";
import BookList from "./components/BookList.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: "Lao Hac",
          description: "Cach lao Hac ban Cau Vang tan nhan nhu the nao",
          price: 1000
        },
        {
          title: "Chi Pheo",
          description: "Cach Chi Pheo tan Thi No",
          price: 2000
        },
        {
          title: "Hai dua tre",
          description: "Cau chuyen ve hai dua tre xem tau",
          price: 3000
        }
      ]
    };
  }

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <BookList books={books} />
            </Route>
            <Route path="/search">
              <BookList books={books} />
            </Route>
            <Route path="/api/books">
              <ApiBookList books={books} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
