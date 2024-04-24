import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoContext } from "./store/TodoItems-store";

function List({ name, date }) {
  const { DeleteItem } = useContext(TodoContext);  
  return (
    <>
      <div className="row rows">
        <div className="col-5">{name}</div>
        <div className="col-5">{date}</div>
        <div className="col-1 text-center">
          <button
            type="button"
            className="btn btn-danger btns"
            onClick={() => {
              DeleteItem(name);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}

// List.PropTypes = {
//   todo: PropTypes.string,
//   date: PropTypes.string,
// };

// List.defaultProps = {
//   todo: " ",
//   date: " ",
// };

export default List;
