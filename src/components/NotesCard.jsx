import React from "react";
import { showFormattedDate } from "../utils/index";
import NotesButton from "./NotesButton";

function NotesCard({
  id,
  title,
  body,
  createdAt,
  onArchive,
  onDelete,
  archived,
}) {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <NotesButton
            id={id}
            onDelete={onDelete}
            onArchive={onArchive}
            archived={archived}
          />
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
