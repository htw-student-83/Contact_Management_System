export default function Container({children}){
    return(
        <div className="flex flex-grow bg-green-100 h-96 w-full">{children}
            <p>Meine Liste</p>
        </div>
    )
}