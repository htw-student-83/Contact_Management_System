export default function Contactdetails({contact}){
    return(
        <div className="font-serif text-lg mb-10 p-5 shadow-xl w-60 rounded-xl border-emerald-500 border">
            <p>{contact.Firstname}</p>
            <p>{contact.Lastname}</p>
            <p>{contact.Mobile}</p>
        </div>
    )
}