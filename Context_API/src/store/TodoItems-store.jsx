import { createContext } from "react";

export const TodoContext = createContext({
  todoItems: [],
  AddNewItem: () => {},
  DeleteItem: () => {},
});
