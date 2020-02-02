import React from "react";

export function ResetFilter(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Reset Filters</button>;
}
