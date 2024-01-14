import {useState} from "react";

export default function ContactForm(){

    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contact = {Firstname, Lastname, Mobile};
        const response = await fetch('/api/contact', {
            Method: "POST",
            Body: JSON.stringify(contact),
            Header: {
                "Content-Type": "application/json"
            }
        })
        const json = response.json();
        if(!response.ok){
            console.log("Added a new contact failed." + setError(json))
        }
    }

    return(
        <div className="mt-20 ml-24">
            <p className="font-bold text-2xl">Neuer Kontakt</p>
            <div className="">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 mt-5">
                    <label className="mt-2">Firstname:</label>
                    <input
                        type="text"
                        onChange={(event) => setFirstname(event.target.value)}
                        value={Firstname}
                        className="p-1 pl-2 font-mono"/>
                    <label className="mt-6">Lastname:</label>
                    <input
                        type="text"
                        onChange={(event) => setLastname(event.target.value)}
                        value={Lastname}
                        className="mt-5 p-1 pl-2 font-mono"/>
                    <label className="mt-6">Mobile:</label>
                    <input
                        type="text"
                        onChange={(event) => setMobile(event.target.value)}
                        value={Mobile}
                        className="mt-5 p-1 pl-2 font-mono"/>
                    {Error && console.log(Error)}
                </form>
                <button className="bg-neutral-300 mt-8 w-96 pt-2 pb-2 rounded-3xl">New contact</button>
            </div>
        </div>
    )
}