import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";
import "./Chat.css";
import EachMessage from "./EachMessage";
import ChatForm from "./ChatForm";

function Chat() {
  const [item, setItem] = useState({ name: "", text: "", color: "" });
  const [items, setItems] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getItems = async () => {
    const q = query(collection(db, "chat"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setItems(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (currentId === "") {
      // Create new document
      try {
        await addDoc(collection(db, "chat"), {
          name: item.name,
          text: item.text,
          color: item.color,
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      // Update existing document
      try {
        await updateDoc(doc(db, "chat", currentId), {
          name: item.name,
          text: item.text,
          color: item.color,
        });
        setCurrentId("");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    setItem({ name: "", text: "", color: "" });
    getItems();
  };

  const onDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "chat", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  // Colors for selection menu
  const colors = [
    "Text Background",
    "Red",
    "Blue",
    "Green",
    "Black",
    "Orange",
    "Purple",
    "Brown",
  ];

  return (
    <div className="chat-box">
      <ul>
        {items.map((item) => (
          <EachMessage
            key={item.id}
            item={item}
            setItem={setItem}
            setCurrentId={setCurrentId}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <ChatForm item={item} setItem={setItem} colors={colors} onSubmit={onSubmit} />
    </div>
  );
}

export default Chat;
