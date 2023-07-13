import React from 'react'
import './Chat.css'

function EachMessage({ item, setItem, setCurrentId, onDelete }) {
  return (
    <li
      style={{ backgroundColor: item.color }}
      className="eachMessage"
      key={item.id}
    >
      {item.name} - {item.text} - {item.voteup}
      {/* <button
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
      </button> */}
      {/* <button onClick={() => onDelete(item.id)}>Delete</button> */}
    </li>
  )
}

export default EachMessage
