import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Navbar</h1>
            <div className="links">
                <Link href="/">Landing</Link>
                <Link href="/login-signup"style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>Login/Signup</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/services">Services</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;