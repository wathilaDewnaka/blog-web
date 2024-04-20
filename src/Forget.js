import { Link } from "react-router-dom"

export default function Forget(){
    return(
        <div className="mx-auto" style={{maxWidth: "740px"}}>

            <h2>To reset the password please contact admin</h2>
            <p>Wathila Karunathilake</p>
            <p>wathiladk@gmail.com</p>
            <p>+94 77 089 1499</p>
            
            <Link to="/home">Back to Homepage...</Link>
        </div>
    )
}