import styles from "./Buttons.module.css";
const Buttons = () => {
  return (
    <div className={`container text-center ${styles.btnContainer}`}>
      <div className={`row row-cols-4 ${styles.btnRow}`}>
        <div className="col">
          <button className={styles.btns}>AC</button>
        </div>
        <div class="col">
          <button className={styles.btns}>C</button>
        </div>
        <div class="col">
          <button className={styles.btns}>%</button>
        </div>
        <div class="col">
          <button className={styles.btns}>/</button>
        </div>
      </div>
      <div className={`row row-cols-4 ${styles.btnRow}`}>
        <div className="col">
          <button className={styles.btns}>7</button>
        </div>
        <div class="col">
          <button className={styles.btns}>8</button>
        </div>
        <div class="col">
          <button className={styles.btns}>9</button>
        </div>
        <div class="col">
          <button className={styles.btns}>*</button>
        </div>
      </div>
      <div className={`row row-cols-4 ${styles.btnRow}`}>
        <div className="col">
          <button className={styles.btns}>4</button>
        </div>
        <div class="col">
          <button className={styles.btns}>5</button>
        </div>
        <div class="col">
          <button className={styles.btns}>6</button>
        </div>
        <div class="col">
          <button className={styles.btns}>+</button>
        </div>
      </div>
      <div className={`row row-cols-4 ${styles.btnRow}`}>
        <div className="col">
          <button className={styles.btns}>1</button>
        </div>
        <div class="col">
          <button className={styles.btns}>2</button>
        </div>
        <div class="col">
          <button className={styles.btns}>3</button>
        </div>
        <div class="col">
          <button className={styles.btns}>-</button>
        </div>
      </div>
      <div className={`row row-cols-4 ${styles.btnRow}`}>
        <div className="col">
          <button className={styles.btns}>00</button>
        </div>
        <div class="col">
          <button className={styles.btns}>0</button>
        </div>
        <div class="col">
          <button className={styles.btns}>.</button>
        </div>
        <div class="col">
          <button id={styles.eq} className={styles.btns}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
