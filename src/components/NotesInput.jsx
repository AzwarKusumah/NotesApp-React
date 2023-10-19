import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limitChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return { title: event.target.value.slice(0, this.state.limitChar) };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }
  render() {
    return (
      <>
        <div className="px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Buat Catatan</h2>
          <main className="flex justify-center">
            <form
              className="form-control w-full max-w-xs"
              onSubmit={this.onSubmitEventHandler}
            >
              <label className="label">
                <span className="label-text">Judul</span>
                <span className="label-text-alt">
                  {this.state.limitChar - this.state.title.length} Karakter
                </span>
              </label>
              <input
                id="title"
                type="title"
                placeholder="Tulis judul disini..."
                className="input input-bordered w-full max-w-xs"
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              />
              <label className="label">
                <span className="label-text">Isi catatan</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
              ></textarea>
              <button type="submit" className="btn btn-neutral m-8">
                Tambahkan
              </button>
            </form>
          </main>
        </div>
      </>
    );
  }
}

export default NotesInput;
