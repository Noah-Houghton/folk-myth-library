import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getRowValue(item, colKey) {
  const val = item[colKey];
  return <TableCell key={val}>{val}</TableCell>;
}

export default function SimpleTable(props) {
  const classes = useStyles();
  if (props.data.length === 0) {
    return <p>Loading...</p>;
  }
  const columns = Object.keys(props.data[0]).map(key => (
    <TableCell key={key}>{key}</TableCell>
  ));
  const rows = props.data.map(function(item) {
    const keys = Object.keys(item);
    let ret = [];
    for (let key of keys) {
      ret.push(getRowValue(item, key));
    }
    return <TableRow>{ret}</TableRow>;
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key="Columns">{columns}</TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
