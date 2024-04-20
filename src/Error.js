import { Link } from "react-router-dom"

export default function Error(){
    return(
        <div className="mx-auto" style={{maxWidth: "740px"}}>

            <h2>Sorry</h2>
            <p>Page cannot be found</p>
            
            <Link to="/home">Back to Homepage...</Link>
        </div>
    )
}