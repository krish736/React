import { useContext } from "react";
import { TodoContext } from "./store/TodoItems-store";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoContext);
  return todoItems.length === 0 && <p>No task added yet</p>;
}

export default WelcomeMessage;
