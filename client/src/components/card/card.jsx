import { Link } from "react-router-dom";

import "./card.css";

function Card({ dog }) {
    const { image, name, temperaments, weight, id } = dog;
    return (
        <div className="card-container">
                <img src={image} alt="" />
            <div className="text-container">
                <Link to={`/home/${id}`} className="link">
                    <h1> {name[0].toUpperCase()+name.slice(1)}</h1>
                    <h3> {temperaments}</h3>
                    <h3>Peso: {weight}</h3>
                </Link>
            </div>
        </div>
    );
}

export default Card;
