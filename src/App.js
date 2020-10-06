import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./item.jsx";

function App() {
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");

  function removeItem(id) {
    setItems((oldItems) => {
      let newItems = [];
      for (let i = 0; i < oldItems.length; i++) {
        if (i !== id) newItems.push(oldItems[i]);
      }
      return newItems;
    });
  }

  function addItem() {
    if (newItem === "") return;
    setItems(() => {
      let newItems = [...items, newItem];
      console.log(newItems);
      return newItems;
    });
    setNewItem("");
  }

  function handleChange(e) {
    setNewItem(e.target.value);
    console.log(newItem);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My todo-list :-)</h1>
        <ul>
          {items.map((item, index) => {
            return (
              <li>
                <Item id={index} name={item} remove={removeItem} />{" "}
              </li>
            );
          })}
        </ul>
        <input type="text" value={newItem} onChange={handleChange}></input>
        <button onClick={addItem}>add</button>
      </header>
    </div>
  );
}

export default App;
