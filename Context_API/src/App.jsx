import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import "./App.css";
import ListItems from "./ListItems";
import WelcomeMessage from "./WelcomeMessage";
// import { useState } from "react";
import  TodoContextProvider  from "./store/TodoItems-store";

function App() {
  return (
    <>
      <TodoContextProvider>
        <div className="todo-container text-center">
          <Heading />
          <Input />
          <WelcomeMessage />
          <ListItems />
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
