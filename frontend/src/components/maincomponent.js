import {Link} from "react-router-dom";

export default function Maincomponent(){
    return(
        <div className="flex flex-grow justify-center bg-green-300 p-11 text-4xl font-bold font-sans">
            <Link to='/'>
                <h1>☎ Meine Kontakte</h1>
            </Link>
        </div>
    )
}