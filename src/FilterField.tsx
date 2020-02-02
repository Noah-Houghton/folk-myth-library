import React from "react";
import "./FilterField.css";

export function FilterField(props: { handler: () => void }) {
  function handleKeypress(e: any) {
    const ENTER = 13;
    if (e.keyCode === ENTER) {
      props.handler();
    }
  }
  return (
    <div className="filter">
      <input
        placeholder="Enter a term to filter the library"
        id="searchTerm"
        type="text"
        onKeyUp={handleKeypress}
      ></input>
      <button onClick={props.handler}>Filter</button>
    </div>
  );
}
