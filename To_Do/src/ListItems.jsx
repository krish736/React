import List from "./List";
const ListItems = ({ todoItems,handleDeleteItem }) => {
  return (
    <div className="list-container">
      {todoItems.map((items) => (
        <List key={items.name} name={items.name} date={items.date} handleDeleteItem={handleDeleteItem}></List>
      ))}
    </div>
  );
};

export default ListItems;
