import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { csv } from "d3-fetch";

import Table from "./Table.js";

class App extends React.Component {
  loadBooks() {
    this.setState({ loading: true });
    let promise = csv(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2v2Ka1L9i28QBUQq_-GgZtcHO6UGHw6M5Po7GxGd5Iczn0dyhhIJMFO82PbZUWpd9xjqx4wzhCoEF/pub?gid=0&single=true&output=csv"
    );
    promise.then(response => {
      let data = response;
      data.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = item[key].trim();
          let potentialArray = item[key].split(",");
          item[key] = potentialArray.length > 1 ? potentialArray : item[key];
        });
        item["Number of Copies"] = +item["Number of Copies"];
        item["Year Published"] = +item["Year Published"];
      });
      this.setState({ filteredBooks: data, allBooks: data, loading: false });
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      allBooks: [],
      filteredBooks: [],
      searchTerm: "",
      filters: [],
    };
  }
  componentDidMount() {
    this.setState({ books: this.loadBooks() });
  }
  render() {
    const books = this.state.filteredBooks;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"To Vincent, Who Shared the Quest"</h2>
          <p>&mdash; Esther Casier-Quinn</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Table data={books} />
      </div>
    );
  }
}

export default App;
