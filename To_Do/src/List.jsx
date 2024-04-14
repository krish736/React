// import PropTypes from "prop-types";

function List(props) {
  return (
    <>
      <div class="row rows">
        <div class="col-5">{props.name}</div>
        <div class="col-5">{props.date}</div>
        <div class="col-1 text-center">
          <button type="button" class="btn btn-danger btns">
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
