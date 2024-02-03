import {useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import Mobilecheck from '../components/mobilecheck';

export default function Contactdetails({contact}) {

    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");

    const changedContact = {Firstname, Lastname, Mobile};

    const handleDeleteClick = async () => {
        const response = await fetch('/api/contact/' + contact._id, {
            method: "DELETE"
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            console.log(error);
        }

        if (response.ok) {
            setError(null);
            alert("Contact was deleted successfully.")
        }
    }

    const handleUpdateClick = () => {
        setIsModalOpen(true); // Set isModalOpen state to true to open the modal
    };

    const handleUpdateClose =  async () => {
        if(fieldsWithContent()){
            changedContact.Firstname = document.getElementById("vorname").value;
            changedContact.Lastname = document.getElementById("nachname").value;
            changedContact.Mobile = document.getElementById("mobile").value;
            if(Mobilecheck.isValid(changedContact.Mobile)){
                const response = await fetch('/api/contact/' + contact._id, {
                    method: "PUT",
                    body: JSON.stringify(changedContact),
                    headers:{
                        "Content-Type": "Application/json"
                    }
                })
                const json = await response.json();
                if(response.ok){
                    alert("Contact was changed successfully.")
                }
            }
        }
        setIsModalOpen(false);
    }

    //check the content of input fields
    function fieldsWithContent(){
        var size1 = document.getElementById("vorname").value.length;
        var size2 = document.getElementById("nachname").value.length;
        var size3 = document.getElementById("mobile").value.length;
        return size1 > 0 && size2 > 0 && size3 > 0;
    }

    return(
        <div
            className="grid grid-cols-2 font-serif text-lg mb-10 p-5 shadow-xl w-80 rounded-xl border-emerald-500 border">
            <div>
                <p>{contact.Firstname} {contact.Lastname}</p>
                <p>{contact.Mobile}</p>
            </div>
            <div className="flex flex-row p-4 ml-14 hover: cursor-pointer">
                <span onClick={handleUpdateClick}>{<GrUpdate size={25}/>}</span>
                <span className="ml-4" onClick={handleDeleteClick}>{<RiDeleteBin6Line size={25}/>}</span>
            </div>
            {isModalOpen && (
                <div className="mt-10">
                    <form id="update">
                        <input className="p-2 font-mono w-56"
                               type="text"
                               id="vorname"
                               placeholder="vorname"
                               onChange={(e) => setFirstname(e.target.value)}
                               value={Firstname}/>

                        <input className="mt-5 p-2 font-mono w-56"
                               type="text"
                               id="nachname"
                               placeholder="nachname"
                               onChange={(e) => setLastname(e.target.value)}
                               value={Lastname}/>
                        <input className="mt-5 p-2 font-mono w-56"
                               type="number"
                               id="mobile"
                               placeholder="mobile"
                               onChange={(e) => setMobile(e.target.value)}
                               value={Mobile}/>
                    </form>
                    <button className="bg-gray-200 w-56 p-2 mt-4 rounded-3xl hover:bg-amber-200 font-mono" onClick={handleUpdateClose}>Ändern</button>
                </div>
            )}
        </div>
    )
}