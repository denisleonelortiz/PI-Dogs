import { NavLink, useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import "./create.css";

function Create() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };
    return (
        <div className="create">
            <h1 className="titulo">Crear Raza</h1>
            <Form />
            <div className="button-div">
                <button onClick={() => back()}>Home</button>
            </div>
        </div>
    );
}

export default Create;
