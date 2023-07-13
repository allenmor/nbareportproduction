import React from 'react';
import './Chat.css'
function ChatForm({ item, setItem, colors, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
      className='name-input'
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
        value={item.color='blue'}
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChatForm;
