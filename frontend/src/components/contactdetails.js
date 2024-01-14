export default function Contactdetails({contact}){
    return(
        <div className="font-serif text-lg mb-10 p-5 shadow-xl w-60 rounded-xl border-emerald-500 border">
            <p>Firstname: {contact.Firstname}</p>
            <p>Lastname: {contact.Lastname}</p>
            <p>Mobile: {contact.Mobile}</p>
        </div>
    )
}