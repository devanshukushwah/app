import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import app from "../auth/authFirebase";

const AuthContext = React.createContext();

export function GlobalProvider({ children }) {
  const { currentUser } = useAuth();
  const homepage = `cardnote/${currentUser.uid}/directory/homepage`;

  const [folders, setFolders] = useState([]);
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState(homepage);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [loading, setLoading] = useState(true);
  const [normal, setNormal] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [profile, setProfile] = useState(false);
  const [directory, setDirectory] = useState([
    { id: 1, name: "Homepage", url: homepage },
  ]);
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [isSelectAllOn, setIsSelectAllOn] = useState(false);
  const [isOperation, setIsOperation] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const toggleProfile = () => {
    setProfile(!profile);
  };

  const triggerOperation = () => {
    setIsOperation(!isOperation);
  };

  const triggerFetchAgain = () => {
    setFetchAgain(!fetchAgain);
  };

  const handleSelectMark = (type) => {
    folders.map((item) => {
      return (item.clicked = type);
    });
    cards.map((item) => {
      return (item.clicked = type);
    });
    triggerOperation();
  };

  const deleteItem = () => {
    let del = folders.concat(cards);
    if (del.length === 0) return;

    del.map((item) => {
      if (item.clicked) {
        if (item.type === "folder") {
          const ref = app.database().ref(`${url}/folders/`);
          ref.child(item.id).remove();
          const ref2 = app
            .database()
            .ref(`cardnote/${currentUser.uid}/directory/`);
          ref2.child(item.id).remove();
        } else {
          const ref = app.database().ref(`${url}/cards/`);
          ref.child(item.id).remove();
        }
      }
    });
    setIsDeleteOn(false);
    setNormal(false);
    triggerFetchAgain();
  };
  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsError(false);
      setErrorType(null);
    }, 5000);
  }, [isError]);

  const deleteOn = () => {
    setIsDeleteOn(true);
  };
  const deleteOff = () => {
    handleSelectMark(false);
    setIsSelectAllOn(false);
    setIsDeleteOn(false);
  };
  useEffect(() => {
    isDeleteOn ? deleteOn() : deleteOff();
  }, [isDeleteOn]);

  const openProfile = () => {
    setProfile(true);
  };
  const closeProfile = () => {
    setProfile(false);
  };
  const closeModal = () => {
    document.body.style.overflow = "auto";

    setIsModal(false);
  };
  const openModal = (type) => {
    setModalType(type);
    document.body.style.overflow = "hidden";
    setIsModal(true);
  };

  const clickOnPath = (id) => {
    if (directory.length === id) return;
    const newDirectory = directory.slice(0, id);
    setDirectory(newDirectory);
    const newUrl = directory[id - 1].url;
    setUrl(newUrl);
    triggerFetchAgain();
  };

  const clickedOnFolder = (id, title) => {
    const tempUrl = `cardnote/${currentUser.uid}/directory/${id}`;
    setUrl(tempUrl);
    const newDirectory = [
      ...directory,
      { id: directory.length + 1, name: title, url: tempUrl },
    ];

    setDirectory(newDirectory);
    triggerFetchAgain();
  };

  const addFolder = (title) => {
    if (folders.find((item) => item.title === title)) {
      setErrorType("Already Exist");
      setIsError(true);
      return;
    }
    const data = {
      id: new Date().getTime().toString(),
      title: title.trim(),
      type: "folder",
    };
    const ref = app.database().ref(`${url}/folders/${data.id}`);
    ref.set(data);
    setNormal(false);
    triggerFetchAgain();
    closeModal();
  };

  const addCard = (title, value) => {
    const data = {
      id: new Date().getTime().toString(),
      title: title.trim(),
      value: value.trim(),
      type: "card",
    };
    const ref = app.database().ref(`${url}/cards/${data.id}`);
    ref.set(data);
    setNormal(false);
    triggerFetchAgain();
    closeModal();
  };

  const clickOnBackButton = () => {
    if (directory.length === 1) return;
    const len = directory.length;
    const newDirectory = directory.slice(0, len - 1);
    setDirectory(newDirectory);
    const newUrl = directory[len - 2].url;
    setUrl(newUrl);
    triggerFetchAgain();
  };

  useEffect(() => {
    let user = "default";
    if (currentUser !== null) user = currentUser.uid;

    const tempUrl = `cardnote/${user}/directory/homepage`;
    setUrl(tempUrl);
  }, [currentUser]);

  // useEffect For Fetch/Updata Data....
  useEffect(() => {
    // const fetchFunction = () => {
    const tempFolders = [];
    const tempCards = [];
    if (normal === true) setLoading(true);
    const ref = app.database().ref(`${url}/folders/`);
    ref.once("value", (snapshot) => {
      const data = snapshot.val();
      for (let i in data) {
        const tempItem = { ...data[i], clicked: false };
        tempFolders.push(tempItem);
      }
    });
    const ref2 = app.database().ref(`${url}/cards/`);
    ref2
      .once("value", (snapshot) => {
        const data = snapshot.val();

        for (let i in data) {
          const tempItem = { ...data[i], clicked: false };
          tempCards.push(tempItem);
        }
      })
      .then(() => {
        setFolders(tempFolders);
        setCards(tempCards);
        if (normal === true) setLoading(false);
        setNormal(true);
      });
    // };
    // fetchFunction();
  }, [currentUser, fetchAgain]);

  const handleDelete = (id, type, selectAll) => {
    var i = 0;
    if (selectAll) {
      for (i = 0; i < folders.length; i++) {
        folders[i].clicked = !folders[i].clicked;
      }
      for (i = 0; i < cards.length; i++) {
        cards[i].clicked = !cards[i].clicked;
      }
      triggerOperation();
    } else {
      if (type === "folder") {
        for (i = 0; i < folders.length; i++) {
          if (folders[i].id === id) folders[i].clicked = !folders[i].clicked;
        }
      } else {
        for (i = 0; i < cards.length; i++) {
          if (cards[i].id === id) cards[i].clicked = !cards[i].clicked;
        }
      }
      triggerOperation();
    }
  };

  const values = {
    folders,
    cards,
    triggerFetchAgain,
    directory,
    setDirectory,
    clickedOnFolder,
    addFolder,
    addCard,
    clickOnPath,
    loading,
    clickOnBackButton,
    closeModal,
    openModal,
    isModal,
    modalType,
    profile,
    setProfile,
    openProfile,
    closeProfile,
    isDeleteOn,
    setIsDeleteOn,
    deleteOn,
    deleteOff,
    deleteItem,
    isSelectAllOn,
    setIsSelectAllOn,
    handleDelete,
    handleSelectMark,
    toggleProfile,
    isError,
    errorType,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AuthContext);
}