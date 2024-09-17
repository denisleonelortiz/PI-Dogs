import { NavLink } from 'react-router-dom';
import './landing.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs, getTemperaments } from '../../redux/action';

function Landing() {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllDogs())
        dispatch(getTemperaments())
    }, [dispatch])
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