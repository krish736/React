import { useState } from "react";
import ListItems from "./ListItems";
import styles from "./List.module.css";

const List = () => {
  let [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const handleAddButtonClick = () => {
    addItem();
  };

  const addItem = () => {
    const inputElement = document.getElementById("itemInput");
    const value = inputElement.value.trim();
    if (value !== "") { 
      let newItems = [...items, value];
      setItems(newItems);
      setInputValue(""); 
    }
  };

  return (
    <>
      <input
        type="text"
        name="itemInput"
        id="itemInput"
        className={styles.in}
        onKeyDown={handleOnKeyDown}
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button className="addBtn" onClick={handleAddButtonClick}>
        Add
      </button>
      <ListItems items={items} />
    </>
  );
};

export default List;
