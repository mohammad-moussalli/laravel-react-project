import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Laravel/React Project</h1>
            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/login-signup"style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>Login/Signup</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/services">Services</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;