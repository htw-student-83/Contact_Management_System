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
        <div className="mt-20 ml-64">
            <p className="font-bold text-2xl">Neuer Kontakt</p>
            <div className="">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 mt-5">
                    <label className="mt-2">Firstname:</label>
                    <input
                        type="text"
                        onChange={(event) => setFirstname(event.target.value)}
                        value={Firstname}
                        className="mr-20 p-2 font-mono"/>
                    <label className="mt-7">Lastname:</label>
                    <input
                        type="text"
                        onChange={(event) => setLastname(event.target.value)}
                        value={Lastname}
                        className="mr-20 p-2 mt-5  font-mono"/>
                    <label className="mt-7">Mobile:</label>
                    <input
                        type="text"
                        onChange={(event) => setMobile(event.target.value)}
                        value={Mobile}
                        className="mr-20 p-2 mt-6 font-mono"/>
                    {Error && <div className="error">{Error.message}</div>}
                    <button className="bg-neutral-300 mt-8 w-96 pt-2 pb-2 rounded-3xl">New contact</button>
                </form>
            </div>
        </div>
    )
}