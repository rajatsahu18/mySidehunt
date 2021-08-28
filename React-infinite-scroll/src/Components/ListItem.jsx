import React from "react";

export const ListItem = ({ props }) => {
  return (
    <div>
      <h4>List Item {props + 1}</h4>
    </div>
  );
};
