import {useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

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

    const handleUpdateClick = async () =>{
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
            <div className="flex flex-row p-4 ml-14 hover: cursor-pointer">
                <span onClick={handleUpdateClick}>{<GrUpdate size={25}/>}</span>
                <span className="ml-4" onClick={handleDeleteClick}>{<RiDeleteBin6Line size={25}/>}</span>
            </div>
        </div>
    )
}