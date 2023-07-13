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

function Chat() {
  const [item, setItem] = useState({ name: "", text: "", color: "Red" });
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
    getItems()
  };

  const onDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "chat", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    getItems()
  };

  useEffect(() => {
    getItems();
  }, []);

  // Colors for selection menu
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Orange",
    "Purple",
    "Brown",
    "Pink",
  ];

  return (
    <div className="chat-box">
      <ul>
        {items.map((item) => (
          <li
            style={{ backgroundColor: item.color }}
            className="each-message"
            key={item.id}
          >
            {item.name} - {item.text} - {item.voteup}
            <button
              onClick={() => {
                setItem({
                  name: item.name,
                  text: item.text,
                  color: item.color,
                });
                setCurrentId(item.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={item.name}
          onChange={(e) =>
            setItem((prevState) => ({ ...prevState, name: e.target.value }))
          }
          placeholder="Name"
        />
        <input
          type="text"
          value={item.text}
          onChange={(e) =>
            setItem((prevState) => ({ ...prevState, text: e.target.value }))
          }
          placeholder="Text"
        />
        <select
          name="color"
          id="color"
          value={item.color}
          onChange={(e) =>
            setItem((prevState) => ({ ...prevState, color: e.target.value }))
          }
        >
          {colors.map((color, i) => (
            <option key={i} value={color}>
              {color}
            </option>
          ))}
        </select>
        <button type="submit">Add/Update Item</button>
      </form>
    </div>
  );
}

export default Chat;
