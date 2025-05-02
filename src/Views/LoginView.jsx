import './LoginView.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from "../components/Header";

function LoginView() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        if (password === "mango") {
            navigate('/movies');
        } else {
            alert("Wrong password!");
        }
    }

    return (
        <div className="login-container">
            <Header />
            <div className="form-container">
                <h2>Login to Your Account</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">
                    New to Nxtflix? <Link to="/register">Register Now</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginView;