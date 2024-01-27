import {useState} from "react";

export default function ContactForm(){

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contact = {Firstname, Lastname, Mobile};

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contact),
            header: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        if(!response.ok){
            setFirstname("");
            setLastname("");
            setMobile("");
            setError(json.error);
        }

        if(response.ok){
            setError(null);
            console.log("New contact added." + json);
        }
    }

    return(
        <div className="mt-10 ml-72 min-w-96">
            <p className="font-bold text-2xl">Neuer Kontakt</p>
            <div className="">
                <form onSubmit={handleSubmit} className="">
                <div className="mt-10">
                        <label className="mt-2">Vorname:</label>
                        <input
                            type="text"
                            onChange={(event) => setFirstname(event.target.value)}
                            value={Firstname}
                            className="ml-5 p-2 w-72 font-mono"/>
                    </div>
                    <div className="mt-10">
                        <label className="mt-7">Nachname:</label>
                        <input
                            type="text"
                            onChange={(event) => setLastname(event.target.value)}
                            value={Lastname}
                            className="ml-2 p-2 w-72 font-mono"/>
                    </div>
                    <div className="mt-10">
                        <label className="mt-7">Mobile:</label>
                        <input
                            type="text"
                            onChange={(event) => setMobile(event.target.value)}
                            value={Mobile}
                            className="ml-10 p-2 w-72 font-mono"/>
                    </div>
                    {Error && <div className="error">{Error.message}</div>}
                    <button className="bg-neutral-300 w-96 mt-10 p-2 hover:bg-lime-400 hover:rounded-3xl font-sans font-bold">Neuer Kontakt</button>
                </form>
            </div>
        </div>
    )
}