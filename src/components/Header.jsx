import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header-container">
            <div className="title">NXTFLIX</div>
            <div className="login">
                <Link to="/login" className="login-button">Login</Link>
                <Link to="/register" className="register-button">Register</Link>
            </div>
        </div>
    );
}

export default Header;