import {useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

export default function Contactdetails({contact}) {

    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Mobile, setMobile] = useState("");

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
            console.log("Contact was deleted.");
        }
    }

    const handleUpdateClick = () => {
        setIsModalOpen(true); // Set isModalOpen state to true to open the modal
    };

    const handleUpdateClose =  async () => {
        setIsModalOpen(false);
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
                        <input className="p-2"
                               type="text"
                               value={Firstname}
                               placeholder="vorname"
                               onChange={(e) => setFirstname(e.target.value)}/>
                        <input className="mt-5 p-2"
                               type="text"
                               value={Lastname}
                               placeholder="nachname"
                               onChange={(e) => setLastname(e.target.value)}/>
                        <input className="mt-5 p-2"
                               type="number"
                               value={Mobile}
                               placeholder="mobile"
                               onChange={(e) => setMobile(e.target.value)}/>
                    </form>
                    <button className="bg-gray-200 w-52 p-2 mt-4 rounded-3xl hover:bg-amber-200" onClick={handleUpdateClose}>Ändern</button>
                </div>
            )}
        </div>
    )
}