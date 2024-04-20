import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { useState } from "react"

export default function BlogDetails(){

    const {id} = useParams()
    const {allData: allBlogs, loading, error} = useFetch("https://json-server-3-sn3w.onrender.com/allBlogs/" + id)
    const navigate = useNavigate()

    const [deleteLoad,setDeleteLoad] = useState(true)

    function handleDelete(){
        fetch("https://json-server-3-sn3w.onrender.com/allBlogs/" + allBlogs.id, {
            method: "DELETE"
        }).then(() => {
            setDeleteLoad(false)
            navigate("/home")

        })
    }


    return(
        <div className="mx-auto" style={{maxWidth: "740px"}}>
            <h2 className="mb-3 font-weight-bolder" style={{color: "#f1356d"}}>Blog Details</h2>

            {loading && <div className="mx-3">Loading...</div>}

            {error && <div className="mx-3">{error}</div>}

            {allBlogs && (
                <article>
                    <h2 className="border-top pt-4 pb-2" >{allBlogs.title}</h2>
                    <p className="border-bottom py-2">Written by : {allBlogs.author}</p>

                    <p>{allBlogs.body}</p>

                    {deleteLoad && <button className="rounded-3 mx-auto text-white border-0 p-2 text-align-center" style={{backgroundColor: "#f1356d"}} onClick={handleDelete}>Delete Blog</button>}
                    {!deleteLoad && <button className="rounded-3 mx-auto text-white border-0 p-2 text-align-center" style={{backgroundColor: "#f1356d"}} onClick={handleDelete} disabled>Deleting Blog...</button>}
                </article>
            )}


        </div>
    )
}