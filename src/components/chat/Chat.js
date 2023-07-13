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

function Chat() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getItems = async () => {
    const q = query(collection(db, "items"));
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
        await addDoc(collection(db, "items"), { name: itemName });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      // Update existing document
      try {
        await updateDoc(doc(db, "items", currentId), { name: itemName });
        setCurrentId("");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    setItemName("");
  };

  const onDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "items", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    getItems();
  }, [itemName]); // Re-fetch items when an item is added/updated

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <button type="submit">Add/Update Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                setItemName(item.name);
                setCurrentId(item.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
