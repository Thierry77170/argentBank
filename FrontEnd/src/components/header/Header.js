import  logoArgentBank from '../../img/argentBankLogo.webp'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logoutAction } from '../../redux/actions/login.actions.js';
import { userApi } from '../../api/user.api.js'

import  './header.css'

import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function Header() {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const token = window.localStorage.getItem('token');
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated && token) {
                try {
                    const data = await userApi(token);
                    setUserData(data.body);
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchData();
    }, [isAuthenticated, token, userData]);
     
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token'); 
        navigate('/home');
        dispatch(logoutAction())
    }

    return(
        <nav className="main-nav">
            <NavLink to="/home" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logoArgentBank} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
            {isAuthenticated && (
                <>
                    <NavLink to="/user" className="main-nav-item">
                        <FontAwesomeIcon icon={faUserCircle} className="icon" />
                        {userData ? userData.userName : ''}
                    </NavLink>
                    <NavLink to="/login" className="main-nav-item" onClick= {handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                        Sign Out
                    </NavLink>
                </>
            )}
            {!isAuthenticated && (
                <NavLink to="/login" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} className="icon" />
                    Sign In
                </NavLink>
            )}  
            </div>
    </nav>
    );
}

export default Header;