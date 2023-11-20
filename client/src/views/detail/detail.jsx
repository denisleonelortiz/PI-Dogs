import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import { getDogById } from "../../redux/action";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const Dog = useSelector((state) => state.allDogs);
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    useEffect(() => {
        dispatch(getDogById(id));
    }, [dispatch, id]);

    return (
        <div className="container-padre">
            <div className="detail-container">
                <div className="img-container">
                    <img src={Dog[0].image} alt="" />
                </div>
                <div className="data-container">
                    <h2 className="nombre">
                        {Dog[0].name[0].toUpperCase() + Dog[0].name.slice(1)}
                    </h2>
                    <div className="cuadrados-container">
                        <div className="cuadrados">
                            <h2>
                                ID
                                <br /> {Dog[0].id}
                            </h2>
                        </div>
                        <div className="cuadrados">
                            <h2>
                                Altura <br />
                                {Dog[0].height}
                            </h2>
                        </div>
                        <div className="cuadrados">
                            <h2>
                                Peso <br />
                                {Dog[0].weight}
                            </h2>
                        </div>
                    </div>
                    <h2 className="temp-title">Temperamentos</h2>
                    <div className="temperamentos">
                        {Dog[0].temperaments.split(", ").map((t) => (
                            <span>{t}</span>
                        ))}
                    </div>
                    <div className="life-span">
                        <h2>Años de vida: {Dog[0].life_span}</h2>
                    </div>
                </div>
            </div>
            <div>
                <button className="back-button" onClick={back}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Detail;
