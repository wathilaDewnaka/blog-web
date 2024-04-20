import {Link, Outlet} from 'react-router-dom';
import './index.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mx-auto border-bottom mb-3" style={{ maxWidth: "740px" }}>
                <div className="navbar-collapse justify-content-between">
                    <h2 className="font-weight-bold" style={{ color: "#f1356d" }}>Wathila Blogs</h2>
                    <ul className="navbar-nav">
                        <li className="nav-item pt-2">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item pt-2">
                            <Link className="nav-link" to="/new">New Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>

    );
}


export default Navbar;
