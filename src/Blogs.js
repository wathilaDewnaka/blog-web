import { Link } from 'react-router-dom';

function Blogs({ allBlogs, title }) {
    
    return (
        <div className="blog-list">
            <h2 className="my-6 mx-3 font-weight-bold">{title}</h2>
            {allBlogs.map(blog => (
                <Link className="text-decoration-none" to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className="p-4 my-20 border-bottom">
                        <h2 className="mb-2" style={{ color: "#f1356d" }}>{blog.title}</h2>
                        <p className='text-black'>Written by: {blog.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Blogs;
