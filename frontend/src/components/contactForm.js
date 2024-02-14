import {useState} from "react";
import Mobilecheck from '../components/mobilecheck';
import Namecheck from '../components/namecheck';
import Patterneck from '../components/patterncheck'

export default function ContactForm(){

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");
    const [textIsVisible, setTestIsVisible] = useState(false);
    const [Error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const contact = {Firstname, Lastname, Mobile}
        if(!Mobilecheck.isValid(contact.Mobile)) {
            alert("Deine Handynummer ist ungültig.");
        }else if(!Namecheck.containsLetters(Firstname) || !Namecheck.containsLetters(Lastname) ||
                Namecheck.contains_specific_symbols(Firstname) || Namecheck.contains_specific_symbols(Lastname) ||
                !Namecheck.nameBeginsWithCapitalLetter(contact.Firstname) || !Namecheck.nameBeginsWithCapitalLetter(contact.Lastname)){
            alert("Der eingegebene Name ist ungültig.");
        }else if(Patterneck.scriptPattern(contact.Firstname, contact.Lastname, contact.Mobile)) {
            alert("Deine Eingabe ist ungültig.");
        }else{
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();

            if(!response.ok){
                setError(json.error);
            }

            if(response.ok){
                setFirstname("");
                setLastname("");
                setMobile("");
                setTestIsVisible(true)
                setTimeout(()=> {
                    setTestIsVisible(false);
                },3000)
            }
        }
    }


    return(
        <div className="mt-5 ml-72 mb-4 min-w-80 bg-green-100 h-4/5 p-10 rounded-2xl">
            <p className="font-bold text-2xl">Neuer Kontakt</p>
            <div className="">
                <form onSubmit={handleSubmit} className="">
                <div className="mt-10">
                        <label className="mt-2">Vorname:</label>
                        <input
                            type="text"
                            id="vorname"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={Firstname}
                            className="ml-5 p-2 w-72 font-mono"
                            required={true}
                        />
                </div>
                    <div className="mt-10">
                        <label className="mt-7">Nachname:</label>
                        <input
                            type="text"
                            id="nachname"
                            onChange={(e) => setLastname(e.target.value)}
                            value={Lastname}
                            className="ml-2 p-2 w-72 font-mono"
                            required={true}
                        />
                    </div>
                    <div className="mt-10">
                        <label className="mt-7">Mobile:</label>
                        <input
                            type="text"
                            id="mobile"
                            onChange={(e) => setMobile(e.target.value)}
                            value={Mobile}
                            className="ml-10 p-2 w-72 font-mono"
                            required={true}
                        />
                    </div>
                    <button className="bg-gray-200 w-96 mt-10 p-2 hover:bg-lime-400 hover:rounded-3xl font-sans font-bold">Neuer Kontakt</button>
                    {Error && <div className="error">{Error}</div>}
                </form>
            </div>
                <div className="mt-5 text-center">
                    {textIsVisible?<p className="text-green-500 font-mono">Neuer Kontakt erfolgreich hinzugefügt</p>:''}
                </div>
        </div>
    )
}