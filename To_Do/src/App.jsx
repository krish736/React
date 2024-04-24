import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import "./App.css";
import ListItems from "./ListItems";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    let newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="todo-container text-center">
        <Heading />
        <Input handleNewItem={handleNewItem} />
        {todoItems.length > 0 ? (
          <ListItems
            todoItems={todoItems}
            handleDeleteItem={handleDeleteItem}
          />
        ) : (
          <p>No tasks added</p>
        )}
      </div>
    </>
  );
}

export default App;
