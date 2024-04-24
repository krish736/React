import { useState } from "react";

function Input({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameInput = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateInput = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButton = () => {
    handleNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
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
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
