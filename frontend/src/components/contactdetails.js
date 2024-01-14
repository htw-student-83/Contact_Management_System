export default function Contactdetails({contact}){
    return(
        <div className="font-serif text-lg mb-10 shadow-md w-60">
            <p>Firstname: {contact.Firstname}</p>
            <p>Lastname: {contact.Lastname}</p>
            <p>Mobile: {contact.Mobile}</p>
        </div>
    )
}