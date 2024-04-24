import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import List from "./List";

function App() {
  return (
    <div className={styles.listContainer}>
      <h1 className={styles.heading}>Healthy Food</h1>
      <List />
    </div>
  );
}

export default App;
