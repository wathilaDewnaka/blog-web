import Blogs from "./Blogs";
import useFetch from "./useFetch";

function Homepage() {

    const {allData: allBlogs, loading, error} = useFetch("https://wathilaDewnaka.github.io/blog-web/allBlogs")

    return (
        <div className="mx-auto" style={{maxWidth: "740px"}}>
            
            {loading && <div className="mx-3">Loading...</div>}

            {error && <div className="mx-3">{error}</div>}

            {allBlogs && <Blogs allBlogs={allBlogs} title="All Blogs"/>}
        </div>
    );
}

export default Homepage;
