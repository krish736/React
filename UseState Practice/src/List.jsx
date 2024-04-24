import ListItems from "./ListItems";
import styles from "./List.module.css";

const List = () => {
  // let items = ["Ghee", "Green Vegetables", "Fruits"];
  let items = [];

  return (
    <>
      <input type="text" name="" id="" className={styles.in} />
      <ListItems items={items} />
    </>
  );
};

export default List;
