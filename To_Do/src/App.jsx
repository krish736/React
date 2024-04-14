import Heading from "./Heading";
import Input from "./Input";
import "./App.css";
import ListItems from "./ListItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "14-04-2024",
    },
    {
      name: "GO TO College",
      date: "14-04-2024",
    },
  ];
  return (
    <>
      <center className="todo-container text-center">
        <Heading />
        <Input />
        <ListItems props={todoItems}></ListItems>
      </center>
    </>
  );
}

export default App;
