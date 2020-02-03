import React from "react";
import logo from "./react-logo.svg";
import "./App.css";
import { csv } from "d3-fetch";
// import $ from "jquery";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MaterialTable from "material-table";
import { LibraryState, Book, RawBookData } from "./Types";

class App extends React.Component<{}, LibraryState> {
  tableRef: any;
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
    });
  }
  constructor(props: Object) {
    super(props);
    this.state = {
      loading: true,
      allBooks: [],
    };
    this.tableRef = React.createRef<HTMLDivElement>();
  }
  componentDidMount() {
    this.loadBooks();
  }
  scrollToTable = () => {
    window.scrollTo(0, this.tableRef.current.offsetTop);
  };
  renderArray(arr: string[]) {
    let ret = "";
    for (let a of arr) {
      ret += a + ", ";
    }
    ret = ret.substr(0, ret.length - 2);
    return ret;
  }
  render() {
    const books = this.state.allBooks;
    let cols = [
      { field: "Title", title: "Title" },
      {
        field: "Author",
        title: "Author(s)",
        render: (rowData: Book) => this.renderArray(rowData.Author),
      },
      { field: "Shelf", title: "Shelf Location" },
      { field: "Publisher", title: "Publisher" },
      { field: "Translator", title: "Translator" },
      { field: "Volume", title: "Volume" },
      { field: "Region", title: "Region" },
      { field: "Type", title: "Type" },
      { field: "Published", title: "Published" },
      { field: "Copies", title: "# of Copies" },
      {
        field: "Tags",
        title: "Tags",
        render: (rowData: Book) => this.renderArray(rowData.Tags),
      },
      { field: "Language", title: "Language" },
      {
        field: "Editor",
        title: "Editor(s)",
        render: (rowData: Book) => this.renderArray(rowData.Tags),
      },
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Folklore and Mythology Library</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"To Vincent, Who Shared the Quest"</h2>
          <p>&mdash; Esther Casier-Quinn</p>
          <ExpandMoreIcon
            id="HomeArrow"
            fontSize="large"
            onClick={this.scrollToTable}
          ></ExpandMoreIcon>
        </header>
        <div ref={this.tableRef}></div>
        <MaterialTable
          columns={cols}
          data={books}
          title="Folklore and Mythology Library"
        ></MaterialTable>
      </div>
    );
  }
}

export default App;
