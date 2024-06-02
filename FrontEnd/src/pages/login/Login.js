// REACT 
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// REDUX 
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/login.actions.js';

// COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// STYLE
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = { email, password };
        console.log(credentials);
        try {
            const response = await dispatch(loginAction(credentials));
            const body = response.body;
            const token = body.token;
            if (response) {
                if (rememberMe) {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                }
                localStorage.setItem('token', token);
                navigate('/user');
            } else {
                setError('Invalid fields');
                // On sélectionne l'élément d'erreur et on l'affiche
                const errorTag = document.querySelector('.error');
                errorTag.style.display = 'block';
            }
          } catch (error) {
            console.error("erreur lors de la récupération des données");
            setError('Invalid fields');
          }  
    }
    return (
        <main className="main bg-dark login">
            <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-wrapper">
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="text" 
                        id="email" 
                        autoComplete="email" 
                        value={email || ""} 
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        autoComplete="current-password" 
                        value={password || ""} 
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input 
                        type="checkbox" 
                        id="remember-me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>    
                    <button type="submit" className="sign-in-button">Sign In</button> 
                    {error && (
                        <p className="error">
                            {error}
                        </p>
                    )}
                </form>
            </section>
        </main>
    )
}

export default Login;