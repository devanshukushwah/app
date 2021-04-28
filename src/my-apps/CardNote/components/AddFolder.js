import React, { useRef, useEffect } from "react";
import "./css/AddFolder-AddCard.css";
import firebase from "../utils/firebase";

function AddFolder({ title, addFolder, setTitle, url }) {
  const refContainer = useRef(null);
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const handleFolderSubmit = (e) => {
    e.preventDefault();
    addFolder();
    const data = {
      id: new Date().getTime().toString(),
      title: title.trim(),
      type: "folder",
    };
    const ref = firebase.database().ref(`${url}/folders/${data.id}`);
    ref.set(data);

    const refForFolder = firebase
      .database()
      .ref(`cardnote/directory/${data.id}`);
    const dataDir = {
      id: new Date().getTime().toString(),
    };
    refForFolder.set(dataDir);

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
