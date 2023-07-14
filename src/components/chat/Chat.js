import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase";
import { serverTimestamp, orderBy } from "firebase/firestore";
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
  const chatRef = useRef(null);

  const getItems = async () => {
    const q = query(collection(db, "chat"), orderBy("timestamp"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setItems(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const timestamp = serverTimestamp();

    if (currentId === "") {
      try {
        await addDoc(collection(db, "chat"), {
          name: item.name,
          text: item.text,
          color: item.color,
          timestamp: timestamp,
        });
        console.log(item.color);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      try {
        await updateDoc(doc(db, "chat", currentId), {
          name: item.name,
          text: item.text,
          color: item.color,
          timestamp: timestamp,
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

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    getItems();
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [items]);

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
      <ul ref={chatRef}>
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
