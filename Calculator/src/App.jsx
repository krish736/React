import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./Buttons";
import Input from "./Input";

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <Buttons />
    </div>
  );
}

export default App;
