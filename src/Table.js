import React from "react";
import "./Table.css";

class Table extends React.Component {
  render() {
    if (!this.props.data) {
      return (
        <div class="Table">
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="Table">
        <ul>
          {this.props.data.map((val, idx) => {
            return <li key={idx}>{val.Title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Table;
