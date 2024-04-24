// import PropTypes from "prop-types";

function List({ name, date ,handleDeleteItem}) {
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
              handleDeleteItem(name);
            }}
          >
            DELETE
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
