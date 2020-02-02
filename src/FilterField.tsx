import React from "react";
import "./FilterField.css";

export function FilterField(props: { handler: () => void }) {
  return (
    <div className="filter">
      <input
        placeholder="Enter a term to filter the library"
        id="searchTerm"
        type="text"
        onChange={props.handler}
      ></input>
      <button onClick={props.handler}>Filter</button>
    </div>
  );
}
