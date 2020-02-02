import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TableData } from "./Types";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Tooltip from "@material-ui/core/Tooltip";

import "./SimpleTable.css";

import { Book } from "./Types";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type headerData = {
  target: keyof Book;
  text: string;
};

function headerCell(props: {
  handler: () => void;
  text: string;
  active: boolean;
  ascending: boolean;
}) {
  const arrow = props.active ? (
    props.ascending ? (
      <ArrowDownwardIcon fontSize="small"></ArrowDownwardIcon>
    ) : (
      <ArrowUpwardIcon fontSize="small"></ArrowUpwardIcon>
    )
  ) : (
    ""
  );
  return (
    <Tooltip
      title={
        props.active
          ? "Sorting " + (props.ascending ? "Ascending" : "Descending")
          : "Click to sort by this column"
      }
    >
      <TableCell onClick={props.handler}>
        {props.text} {arrow}
      </TableCell>
    </Tooltip>
  );
}

function bookToRow(book: Book) {
  return (
    <TableRow>
      <TableCell>{book.Title}</TableCell>
      <TableCell>{book.Author}</TableCell>
      <TableCell>{book.Shelf}</TableCell>
      <TableCell>{book.Publisher}</TableCell>
      <TableCell>{book.Translator}</TableCell>
      <TableCell>{book.Volume}</TableCell>
      <TableCell>{book.Region}</TableCell>
      <TableCell>{book.Type}</TableCell>
      <TableCell>{book.Published}</TableCell>
      <TableCell>{book.Copies}</TableCell>
      <TableCell>{book.Tags}</TableCell>
      <TableCell>{book.Language}</TableCell>
      <TableCell>{book.Editor}</TableCell>
    </TableRow>
  );
}

export function SimpleTable(props: TableData) {
  const classes = useStyles();
  if (props.data.length === 0) {
    return <p>Loading...</p>;
  }
  const rows = [];
  for (let book of props.data) {
    rows.push(bookToRow(book));
  }
  let titles = [
    { target: "Title", text: "Title" },
    { target: "Author", text: "Author" },
    { target: "Shelf", text: "Shelf Location" },
    { target: "Publisher", text: "Publisher" },
    { target: "Translator", text: "Translator" },
    { target: "Volume", text: "Volume" },
    { target: "Region", text: "Region" },
    { target: "Type", text: "Type" },
    { target: "Published", text: "Published" },
    { target: "Copies", text: "Copies" },
    { target: "Tags", text: "Tags" },
    { target: "Language", text: "Language" },
    { target: "Editor", text: "Editor" },
  ] as headerData[];
  let headers = titles.map((data: headerData, index: number) =>
    headerCell({
      handler: props.onClick(data.target),
      text: data.text,
      active: index === props.activeHeaderIndex,
      ascending: props.ascending,
    })
  );
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="header" key="Columns">
            {headers || ""}
          </TableRow>
        </TableHead>
        <TableBody>{rows || ""}</TableBody>
      </Table>
    </TableContainer>
  );
}
