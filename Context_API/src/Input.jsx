import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useContext } from "react";
import { TodoContext } from "./store/TodoItems-store";

function Input() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const { AddNewItem } = useContext(TodoContext);

  const handleNameInput = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateInput = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButton = () => {
    if (todoName.trim() !== "" && todoDate.trim() !== "") {
      AddNewItem(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    } else {
      alert("Please enter both TODO and date.");
    }
  };

  return (
    <>
      <div className="row rows">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter TODO here"
            value={todoName}
            onChange={handleNameInput}
          />
        </div>
        <div className="col-5">
          <input type="date" value={todoDate} onChange={handleDateInput} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success btns"
            onClick={handleAddButton}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
