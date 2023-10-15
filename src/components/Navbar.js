import {Link} from "react-router-dom";
function Navbar()
{
    return(
        <nav class="navbar text-center">
            <Link to="" class="navbar-brand" className="name"><h2>Netaji Sai Suru</h2></Link>
            <div class="nav">
                <Link to="/" class="nav-link mx-2">Home</Link>
                <Link to="/projects" class="nav-link mx-2">Projects</Link>
                <Link to="/skills" class="nav-link mx-2">Skills</Link>
                <Link to="/Work" class="nav-link mx-2">Roles</Link>
                <Link to="/contact" class="nav-link mx-2">Contact</Link>
            </div>
        </nav>
        
    )
}

export default Navbar;