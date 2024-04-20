import { useState } from "react"
import {useNavigate} from 'react-router-dom';

export default function NewBlog(){

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("")
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()


    function submit(e){
         e.preventDefault()

         const blog = {title, author, body}
         setLoading(true)
         
         fetch("https://json-server-3-sn3w.onrender.com/allBlogs",{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
         }).then(()=>{
            setLoading(false)
            navigate('/home')
         })
    }

    return(
        <div className="mx-auto my-4" style={{maxWidth: "400px"}}>
            <h2 className="mb-3 font-weight-bolder" style={{color: "#f1356d"}}>Add a New Blog</h2>

            <form onSubmit={submit}>
                <label className="d-block text-align-left">Blog Title : </label>
                <input className="d-block my-3 p-3" type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{width: "100%"}}required/>

                <label className="d-block text-align-left">Blog Author : </label>
                <input className="d-block my-3 p-3" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} style={{width: "100%"}}required/>

                <label className="d-block text-align-left">Blog Body : </label>
                <textarea className="d-block my-3 p-3" value={body} onChange={(e) => setBody(e.target.value)} style={{width: "100%"}}required/>


                {!loading && <button className="rounded-3 mx-auto text-white border-0 p-2 text-align-center" style={{backgroundColor: "#f1356d"}} type="submit">Add Blog</button>}
                {loading && <button className="rounded-3 mx-auto text-white border-0 p-2 text-align-center" style={{backgroundColor: "#f1356d"}} disabled type="submit">Adding Blog...</button>}

                
            </form>
        </div>
    )
}