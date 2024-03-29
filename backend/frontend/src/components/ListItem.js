import React from "react";
import { Link } from "react-router-dom";

let getTitile = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getTime = (note) => {
  return new Date(note.update).toLocaleDateString();
};

let getContent = (note) => {
  let titile = getTitile(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(titile, "");

  if (content.length > 45) {
    return content.slice(0, 45) + ".......";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitile(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
