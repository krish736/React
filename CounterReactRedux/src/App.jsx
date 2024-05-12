import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import CounterValue from "./components/CounterValue";
import Heading from "./components/Heading";
import Buttons from "./components/Buttons";
import AddNumber from "./components/AddNumber";

function App() {
    return(
        <center>
            <Container>
                <Heading/>
                <CounterValue/>
                <Buttons/>
                <AddNumber/>
            </Container>
        </center>
    )
}

export default App;
