import styles from "./ListItems.module.css";
const ListItems = () => {
  let items = ["Ghee", "Green Vegtables", "Fruits"];
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <div className={styles.listItems}>
            <li key={index}>{item}</li>
            <button className={styles.eatBtn}>Eat</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
