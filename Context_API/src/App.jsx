import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import "./App.css";
import ListItems from "./ListItems";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { TodoContext } from "./store/TodoItems-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const AddNewItem = (itemName, itemDate) => {
    setTodoItems((currVal) => [...currVal, { name: itemName, date: itemDate }]);
  };

  const DeleteItem = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoContext.Provider value={{
        todoItems:todoItems,
        AddNewItem: AddNewItem,
        DeleteItem: DeleteItem
      }}>
        <div className="todo-container text-center">
          <Heading />
          <Input />
          <WelcomeMessage />
          <ListItems
          />
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
