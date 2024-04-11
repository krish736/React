import Heading from "./Heading";
import Input from "./Input";
import List from "./List";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container text-center">
        <Heading />
        <Input />
        <div className="list-container">
          <List todo="Buy Milk" date="11/04/2024" />
          <List todo="Go To College" date="11/04/2024" />
        </div>
      </center>
    </>
  );
}

export default App;
