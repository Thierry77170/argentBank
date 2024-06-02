import './pageError.css';
import { Link } from 'react-router-dom';

function PageError() {
    return (
        <main className='container'>
            <h1 className='containerTitle'>404</h1>
            <p className='containerText'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/home' 
            className='containerLien'>
                Retourner sur la page d'accueil
            </Link> 
        </main>
    );
}

export default PageError;