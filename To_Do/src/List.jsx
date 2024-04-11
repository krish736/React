import PropTypes from "prop-types";

function List(props) {
  return (
    <>
      <div class="row">
        <div class="col-4">{props.todo}</div>
        <div class="col-4">{props.date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

List.PropTypes = {
  todo: PropTypes.string,
  date: PropTypes.string,
};

List.defaultProps = {
  todo: " ",
  date: " ",
};

export default List;
