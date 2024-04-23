import { useNavigate, useParams, Link } from "react-router-dom"
import useFetch from "./useFetch"
import { useState } from "react"

export default function BlogDetails(){

    const {id} = useParams()
    const {allData: allBlogs, loading, error} = useFetch("https://json-server-3-sn3w.onrender.com/allBlogs/" + id)
    const [password,setPassword] = useState("")
    const [wrong, setWrong] = useState(false)

    const navigate = useNavigate()

    const [deleteLoad,setDeleteLoad] = useState(true)

    function handleDelete(e){
        console.log(allBlogs)

        e.preventDefault()
        if (allBlogs.password === password){
            setWrong(false)

            fetch("https://wathilaDewnaka.github.io/blog-web/allBlogs/" + allBlogs.id, {
                method: "DELETE"
            }).then(() => {
                setDeleteLoad(false)
                navigate("/home")

            })
        }else{
            setWrong(true)
        }    
    }


    return(
        <div className="mx-auto" style={{maxWidth: "740px"}}>
            <h2 className="mb-3 font-weight-bolder" style={{color: "#f1356d"}}>Blog Details</h2>


            {loading && <div className="mx-3">Loading...</div>}

            {error && <div className="mx-3">{error}</div>}

            {allBlogs && (
                <article className="p-2">
                    <h2 className="border-top pt-4 pb-2" >{allBlogs.title}</h2>
                    <p className="border-bottom py-2">Written by : {allBlogs.author}</p>

                    <p className="mb-3">{allBlogs.body}</p>

                    <form onSubmit={handleDelete}>

                        <label className="d-block text-align-left mt-3">*Password to Delete Blog : </label>
                        <input className="d-block my-2 p-1 rounded" type="text" style={{maxWidth: "200px"}} value={password} onChange={(e) => setPassword(e.target.value)} required/>

                        
                    
                        {deleteLoad && <button className="rounded-2 mx-auto text-white border-0 text-align-center mb-3" style={{backgroundColor: "#f1356d"}} type="submit">Delete Blog</button>}
                        {!deleteLoad && <button className="rounded-2 mx-auto text-white border-0 text-align-center mb-3" style={{backgroundColor: "#f1356d"}} type="submit" disabled>Deleting Blog...</button>}

                        {wrong && <div className="mt-1">Wrong password ! Couldn't delete the blog !</div>}
                        {wrong && <Link className="text-decoration-none"to="/forget">Forget Password ?</Link>}
                    </form>
                    
                </article>
            )}


        </div>
    )
}