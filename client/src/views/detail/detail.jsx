import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import { cleanState, getDogById } from "../../redux/action";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const Dog = useSelector((state) => state.allDogs);
    const allDogs = useSelector((state) => state.allDogs);
    const dogById = useSelector((state) => state.dogById);
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    useEffect(() => {
        const dog = allDogs.filter((dog) => dog.id === Number(id));
        dispatch(getDogById(dog));
        return () => {
            dispatch(cleanState());
        };
    }, [dispatch, id]);

    return (
        <div className="container-padre">
            {dogById.length > 0 ? (
                <div className="detail-container">
                    <div className="img-container">
                        <img src={dogById[0].image} alt="Imagen de la raza" />
                    </div>
                    <div className="data-container">
                        <h2 className="nombre">
                            {dogById[0].name[0].toUpperCase() +
                                dogById[0].name.slice(1)}
                        </h2>
                        <div className="cuadrados-container">
                            <div className="cuadrados">
                                <h2>
                                    ID
                                    <br /> {dogById[0].id}
                                </h2>
                            </div>
                            <div className="cuadrados">
                                <h2>
                                    Altura <br />
                                    {dogById[0].height.join(" - ")}
                                </h2>
                            </div>
                            <div className="cuadrados">
                                <h2>
                                    Peso <br />
                                    {dogById[0].weight.join(" - ")}
                                </h2>
                            </div>
                        </div>
                        <h2 className="temp-title">Temperamentos</h2>
                        <div className="temperamentos">
                            {dogById[0].temperaments?.split(", ").map((t) => (
                                <span>{t}</span>
                            ))}
                        </div>
                        <div className="life-span">
                            <h2>Años de vida: {dogById[0].life_span}</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
            <div>
                <button className="back-button" onClick={back}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Detail;
