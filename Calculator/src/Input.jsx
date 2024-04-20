import styles from "./Input.module.css";

const Input = () => {
  return <input className={`form-control ${styles.inputField}`} type="text" />;
};

export default Input;
