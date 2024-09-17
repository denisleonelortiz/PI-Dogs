import { Link } from "react-router-dom";

import "./card.css";

function Card({ dog }) {
    const { image, name, temperaments, weight, id } = dog;
    return (
        <Link to={`/home/${id}`} className="link">
            <div className="card-container">
                <img src={image} alt="" />
                <div className="text-container">
                    <h1> {name[0].toUpperCase() + name.slice(1)}</h1>
                    <h3> {temperaments}</h3>
                    <h3>Peso: {weight.join(" - ")}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;
