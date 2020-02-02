import React from "react";
import "./FilterField.css";
export function FilterField(props: { onClick: () => void }) {
  return (
    <div className="filter">
      <input
        placeholder="Enter a term to filter the library"
        id="searchTerm"
        type="text"
      ></input>
      <button onClick={props.onClick}>Filter</button>
    </div>
  );
}
