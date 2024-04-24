import styles from "./ListItems.module.css";

const ListItems = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <div className={styles.listItems} key={index}>
              <li>{item}</li>
              <button className={styles.eatBtn}>Eat</button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No Healthy Items</p>
      )}
    </>
  );
};

export default ListItems;