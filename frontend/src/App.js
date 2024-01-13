import Maincomponent from "./components/maincomponent";
import Container from "./components/container";
import Innercontainer from "./components/innercontainer";
import Contactlist from "./components/contactlist";
import ContactForm from "./components/contactForm";

function App() {
  return (
    <div className="App">
        <Maincomponent/>
        <Container>
            <Innercontainer>
                <Contactlist/>
            </Innercontainer>
            <Innercontainer>
                <ContactForm/>
            </Innercontainer>
        </Container>
    </div>
  );
}

export default App;
