import { NavLink } from 'react-router-dom';
import './landing.css';

function Landing() {
    return (
        <div className="landing">
            <div className='comenzar'>
            <p>P.I. Dogs</p>
            <NavLink to={'/home'} className='nav-button'>Entrar</NavLink>
            </div>
        </div>
    );
}

export default Landing;