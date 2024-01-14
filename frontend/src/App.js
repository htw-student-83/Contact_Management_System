import {BrowserRouter, Routes, Route} from "react-router-dom";
import Maincomponent from "./components/maincomponent";
import Contactlist from "./components/contactlist"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Maincomponent/>
            <div className="font-mono ml-10 mt-5 text-2xl">
                <Routes>
                    <Route
                        path="/"
                        element={<Contactlist/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
