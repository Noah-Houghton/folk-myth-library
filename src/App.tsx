import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { csv } from "d3-fetch";
import $ from "jquery";

import { arrayContainsPartialString } from "./utils";

import { LibraryState, Book, RawBookData } from "./Types";

import { SimpleTable } from "./SimpleTable";
import { FilterField } from "./FilterField";

class App extends React.Component<{}, LibraryState> {
  filterBooks() {
    const searchTerm = ($("#searchTerm").val() || "") as string;
    this.setState({
      filteredBooks: this.state.allBooks.filter((book: Book) => {
        return searchTerm !== ""
          ? book.Title.includes(searchTerm) ||
              arrayContainsPartialString(book.Author, searchTerm) ||
              arrayContainsPartialString(book.Editor, searchTerm) ||
              arrayContainsPartialString(book.Tags, searchTerm)
          : this.state.allBooks;
      }),
      searchTerm,
      filters: this.state.filters,
    } as LibraryState);
  }
  loadBooks() {
    this.setState({ loading: true });
    let promise = csv(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2v2Ka1L9i28QBUQq_-GgZtcHO6UGHw6M5Po7GxGd5Iczn0dyhhIJMFO82PbZUWpd9xjqx4wzhCoEF/pub?gid=0&single=true&output=csv"
    );
    promise.then(response => {
      let bookData = (response as unknown) as RawBookData[];
      let books: Book[] = [];
      bookData.forEach((item: RawBookData) => {
        let book: Book = {
          Title: item.Title.trim(),
          Author: item.Author.split(",").map((author: string) => author.trim()),
          Shelf: item.Shelf.trim(),
          Publisher: item.Publisher.trim(),
          Translator: item.Translator.trim(),
          Volume: +item.Volume,
          Region: item.Region.trim(),
          Type: item.Type.trim(),
          Published: +item.Published,
          Copies: +item.Copies,
          Tags: item.Tags.split(",").map((tag: string) => tag.trim()),
          Language: item.Language.trim(),
          Editor: item.Editor.split(",").map((editor: string) => editor.trim()),
        };
        books.push(book);
      });
      this.setState({ allBooks: books, loading: false });
      this.filterBooks();
    });
  }
  constructor(props: Object) {
    super(props);
    this.state = {
      loading: true,
      allBooks: [],
      filteredBooks: [],
      searchTerm: "",
      filters: null,
      activeHeaderIndex: -1,
      sortAscending: true,
    };
  }
  componentDidMount() {
    this.loadBooks();
  }
  sortByColumn(column: keyof Book) {
    return () => {
      this.setState({
        activeHeaderIndex: Object.keys(this.state.allBooks[0]).indexOf(column),
        filteredBooks: this.state.filteredBooks.sort((a: Book, b: Book) => {
          return (this.state.sortAscending
          ? a[column] < b[column]
          : a[column] > b[column])
            ? 1
            : -1;
        }),
        sortAscending: !this.state.sortAscending,
      });
    };
  }
  render() {
    const books = this.state.filteredBooks;
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Folklore and Mythology Library</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"To Vincent, Who Shared the Quest"</h2>
          <p>&mdash; Esther Casier-Quinn</p>
        </header>
        <FilterField onClick={this.filterBooks} />
        <SimpleTable
          ascending={this.state.sortAscending}
          activeHeaderIndex={this.state.activeHeaderIndex}
          onClick={this.sortByColumn.bind(this)}
          data={books}
        />
      </div>
    );
  }
}

export default App;
