import styles from "./Input.module.css";

const Input = ({ calVal }) => {
  return (
    <input
      className={`form-control ${styles.inputField}`}
      type="text"
      value={calVal}
      readOnly
    />
  );
};

export default Input;
