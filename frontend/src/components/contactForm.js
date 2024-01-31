import {useState} from "react";

export default function ContactForm(){
    const MINLENGTH_OF_MOBILENUMBER = 11;
    const MOBILENETWORK = ["0152", "0162", "0172", "0173", "0174", "0175", "0153", "0179"];

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const contact = {Firstname, Lastname, Mobile}

        if(!isValid(contact.Mobile)){
            alert("Deine Handynummer ist ungültig.");
        }else if(scriptPattern(contact.Firstname, contact.Lastname)) {
            alert("Deine Eingabe ist ungültig.");
        }else{
            console.log({contact})
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
                console.log("Neuer Kontakt hinzugefügt.", json);
            }
        }
    }

    //Vaidation of a new mobile number
    function isValid(newNumber){
        var number_completly = newNumber >= MINLENGTH_OF_MOBILENUMBER;
        var firstNumbers = newNumber.toString().substring(0, 4);
        var validPattern = patternOfNumbersAreValid(firstNumbers);
        return number_completly && validPattern;
    }


    //check the first 4 characters of a number
    function patternOfNumbersAreValid(pattern){
        let patternIsValid = false;
        for(var i = 0; i < MOBILENETWORK.length; i++){
            if(pattern === MOBILENETWORK[i]){
                patternIsValid = true;
            }
        }
        return patternIsValid;
    }

    //check for the input for a hack action
    function scriptPattern(patternForFirstname, patternForLastname){
        var fisrtLettersOfFirstname = patternForFirstname.substring(0,8);
        var fisrtLettersOfLastname = patternForLastname.substring(0,8);
        let patternIsInValid = false;
        const scriptPattern = "<script>";
        if(fisrtLettersOfFirstname === scriptPattern || fisrtLettersOfLastname === scriptPattern){
            patternIsInValid = true;
        }
        return patternIsInValid;
    }

    return(
        <div className="mt-5 ml-72 mb-9 min-w-80 bg-green-100 h-4/5 p-10 rounded-2xl">
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
                            type="number"
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
        </div>
    )
}