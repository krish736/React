import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buttons from "./ButtonsContainer";
import Input from "./Input";
import { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      let ans = eval(calVal);
      setCalVal(ans);
    } else {
      let newValue = calVal + buttonName;
      setCalVal(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <Input calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
