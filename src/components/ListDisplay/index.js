/* This component will show the list of items that the person has entered.*/

import React from "react";
import ListItem from "../ListItem";

function ListDisplay({ list, tickItem }) {
  return (
    <ol data-testid="ol-test">
      {list.map((listItem, index) => (
        <ListItem
          data-testid="list-item"
          name={listItem.name}
          completed={listItem.completed}
          key={index}
          tickItem={() => tickItem(index)}
        />
      ))}
    </ol>
  );
}

export default ListDisplay;
