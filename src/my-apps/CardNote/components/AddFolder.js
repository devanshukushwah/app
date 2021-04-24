import React, { useRef, useEffect } from "react";
import "./css/AddFolder-AddCard.css";
import firebase from "../utils/firebase";

function AddFolder({ title, addFolder, setTitle }) {
  const refContainer = useRef(null);
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const handleFolderSubmit = (e) => {
    e.preventDefault();
    addFolder();
    const ref = firebase.database().ref("cardnote/");
    const data = {
      title,
      type: "folder",
    };
    ref.push(data);
    setTitle("");
  };
  return (
    <main className="modal-container">
      <form className="addcard" onSubmit={handleFolderSubmit}>
        <h3>Add Folder</h3>
        <input
          ref={refContainer}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export default AddFolder;
