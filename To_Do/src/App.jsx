import Heading from "./Heading";
import Input from "./assets/Input";
import List from "./List";

function App() {
  return (
    <>
      <center>
        <Heading />
        <Input />
        <List todo="Buy Milk" date="11/04/2024" />
        <List todo="Go To College" date="11/04/2024" />
      </center>
    </>
  );
}

export default App;
