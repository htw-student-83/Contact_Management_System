import {BrowserRouter, Routes, Route} from "react-router-dom";
import Maincomponent from "./components/maincomponent";
import Contactlist from "./components/contactlist"
import ContactForm from "./components/contactForm";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Maincomponent/>
            <div className="flex flex-grow gap-40 bg-emerald-100">
                <div className="font-mono ml-10 mt-5 text-2xl">
                    <Routes>
                        <Route
                            path="/"
                            element={<Contactlist/>}
                        />
                    </Routes>
                </div>
                <ContactForm/>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
