import { createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext({
  todoItems: [],
  AddNewItem: () => {},
  DeleteItem: () => {},
});

function todoItemReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = newTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
}

const TodoContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const AddNewItem = (itemName, itemDate) => {
    // setTodoItems((currVal) => [...currVal, { name: itemName, date: itemDate }]);
    const AddNewItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(AddNewItem);
  };

  const DeleteItem = (itemName) => {
    // let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
    const DeleteItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(DeleteItem);
  };

  return (
    <TodoContext.Provider value={{ todoItems, AddNewItem, DeleteItem }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
