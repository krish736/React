import { useContext } from "react";
import { TodoContext } from "./store/TodoItems-store";

import List from "./List";

const ListItems = () => {
  const { todoItems} = useContext(TodoContext);
  return (
    <div className="list-container">
      {todoItems.map((items) => (
        <List key={items.name} name={items.name} date={items.date} ></List>
      ))}
    </div>
  );
};

export default ListItems;
