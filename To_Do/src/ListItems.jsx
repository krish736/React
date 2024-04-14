import List from "./List";
const ListItems = ({ props }) => {
  return (
    <div className="list-container">
      {props.map((items) => (
        <List key={items.name} name={items.name} date={items.date}></List>
      ))}
    </div>
  );
};

export default ListItems;
