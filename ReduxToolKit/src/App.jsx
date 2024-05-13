import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import CounterValue from "./components/CounterValue";
import Heading from "./components/Heading";
import Buttons from "./components/Buttons";
import AddNumber from "./components/AddNumber";
import { useSelector } from "react-redux";
import Private from "./components/Private";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center>
      <Container>
        <Heading />
        {privacy ? <Private /> : <CounterValue />}
        <Buttons />
        <AddNumber />
      </Container>
    </center>
  );
}

export default App;
