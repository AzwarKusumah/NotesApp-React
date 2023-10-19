import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesInput from "./NotesInput";
import NotesNavbar from "../components/misc/NotesNavbar";
import NotesFooter from "../components/misc/NotesFooter";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onSearchNotesEventHandler = this.onSearchNotesEventHandler.bind(this);
  }

  onArchiveEventHandler(id) {
    const updateNote = this.state.notes.map((notes) =>
      notes.id === id ? { ...notes, archived: !notes.archived } : notes
    );
    this.setState({ notes: updateNote });
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onAddNotesEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }
  onSearchNotesEventHandler(event) {
    this.setState({ search: event.target.value.toLowerCase() });
    event.preventDefault();
  }

  render() {
    const searchNotes = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.title.toLowerCase().match(this.state.search)
        );
    const activeNotes = searchNotes.filter((note) => !note.archived);
    const archivedNotes = searchNotes.filter((note) => note.archived);
    return (
      <>
        <NotesNavbar onSearch={this.onSearchNotesEventHandler} />
        <NotesInput addNotes={this.onAddNotesEventHandler} />
        <NotesItemBody
          notes={activeNotes}
          label="Catatan Aktif"
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
        />
        <NotesItemBody
          notes={archivedNotes}
          label="Catatan Archive"
          onDelete={this.onDeleteEventHandler}
          onArchive={this.onArchiveEventHandler}
        />
        <NotesFooter />
      </>
    );
  }
}

export default NotesApp;
