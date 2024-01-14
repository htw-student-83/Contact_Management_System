import {useEffect, useState} from "react";
import Contactdetails from "./contactdetails";

export default function Contactlist(){

    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        const fetchContacts = async ()=>{
            const response = await fetch('/api/contact');
            const contacts = await response.json();
            if(response.ok){
                setContacts(contacts);
            }
        }
        fetchContacts();
    }, []);

    return(
        <div>
            <h2 className="ml-10 mb-5">Kontakte</h2>
            <div className="ml-10">
                {contacts && contacts.map((contact) => (
                    <Contactdetails key={contact._id} contact={contact}/>
                ))}
            </div>
        </div>
    )
}