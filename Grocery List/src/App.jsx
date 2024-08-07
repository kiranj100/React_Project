import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AddItems from "./components/Home/AddItems/AddItems.jsx";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (shoppingItems) => {
    setItems(shoppingItems);
    localStorage.setItem("shoppinglist", JSON.stringify(shoppingItems));
  };

  const addItem = (name) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleChange = (id) => {
    const listedItem = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setAndSaveItems(listedItem);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    console.log(filteredItems);
    setAndSaveItems(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Navbar />

      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Home
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
