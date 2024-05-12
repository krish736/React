import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={`card ${styles.container} `}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
