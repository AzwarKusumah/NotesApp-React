import React from "react";
import NotesCard from "./NotesCard";

function NotesItemList({ notes, onDelete, archived, onArchive }) {
  return (
    <>
      {notes.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {notes.map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              archived={archived}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p>Tidak Ada catatan</p>
      )}
    </>
  );
}

export default NotesItemList;
