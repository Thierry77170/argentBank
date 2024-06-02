import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header.js'
import Footer from '../../components/footer/Footer.js'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Root() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      if (token) {
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
        dispatch({ type: 'SET_TOKEN', payload: 200 });
        navigate('/user');
      } else {
        navigate('/home');
      }
    }, [dispatch, navigate]);

    return (
        <>
            <Header />  
            <Outlet />
            <Footer />
        </>
      );
}

export default Root;