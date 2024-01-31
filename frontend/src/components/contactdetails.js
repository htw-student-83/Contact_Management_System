import {useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";

export default function Contactdetails({contact}){

    const [error, setError] = useState(null);

    const handleDeleteClick = async () =>{
        const response = await fetch('/api/contact/' + contact._id, {
            method: "DELETE"
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            console.log(error);
        }

        if(response.ok){
            setError(null);
            console.log("Contact was deleted.");
        }
    }

    return(
        <div className="grid grid-cols-2 font-serif text-lg mb-10 p-5 shadow-xl w-80 rounded-xl border-emerald-500 border">
            <div>
                <p>{contact.Firstname} {contact.Lastname}</p>
                <p>{contact.Mobile}</p>
            </div>
            <div className="p-4 ml-20 hover: cursor-pointer">
                <span onClick={handleDeleteClick}>{<RiDeleteBin6Line size={30}/>}</span>
            </div>
        </div>
    )
}