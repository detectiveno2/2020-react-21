import React, { Component } from "react";

class ApiBookList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      books: []
    }
  }
  
  render() {    
    const {books} = this.state; 
    
    return <div className="ApiBookList">
      {JSON.stringify(books)}
    </div>
  }
  
  componentDidMount() {
    const {books} = this.props;
    
    this.setState({books: books});
  }
}

export default ApiBookList;