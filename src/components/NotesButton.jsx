import React from "react";

function NotesButton({ id, onDelete, archived, onArchive }) {
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
      <button
        className="btn btn-accent"
        type="button"
        onClick={() => onArchive(id)}
      >
        {archived ? "Unarchive" : "Archive"}
      </button>
    </>
  );
}

export default NotesButton;
