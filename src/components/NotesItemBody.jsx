import React from "react";
import NotesItemList from "./NotesItemList";

function NotesItemBody({ notes, onDelete, archived, onArchive, label }) {
  return (
    <>
      <div className="px-5 sm:px-24 py-10 md:py-20">
        <h2 className="text-2xl font-bold mb-8 text-center">{label}</h2>
        <main className="flex justify-center">
          <NotesItemList
            notes={notes}
            onDelete={onDelete}
            archived={archived}
            onArchive={onArchive}
          />
        </main>
      </div>
    </>
  );
}

export default NotesItemBody;
