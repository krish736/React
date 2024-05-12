import { useRef } from "react";
import styles from "./styles/AddNumber.module.css";
import { useDispatch } from "react-redux";

const AddNumber = () => {
  const dispatch = useDispatch();
  const valueElement = useRef();

  const handleAddition = () => {
    const value = valueElement.current.value;
    dispatch({ type: "ADDITITON", payload: { value: value } });
    valueElement.current.value = "";
  };

  const handleSubstraction = () => {
    const value = valueElement.current.value;
    dispatch({ type: "SUBSTRACTION", payload: { value: value } });
    valueElement.current.value = "";
  };

  return (
    <center>
      <div className={`col-auto ${styles.spacing}`}>
        <input type="text" ref={valueElement} />
      </div>
      <div
        className={`d-grid gap-2 d-sm-flex justify-content-sm-center ${styles.lessSpacing}`}
      >
        <button className="btn btn-primary mb-3" onClick={handleAddition}>
          Add
        </button>
        <button className="btn btn-outline-secondary mb-3" onClick={handleSubstraction}>
          Substract
        </button>
      </div>
    </center>
  );
};

export default AddNumber;
