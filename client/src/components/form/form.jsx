import { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";
import validate from "./validate";
import { getTemperaments } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Form() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.allTemperaments);
    const [form, setForm] = useState({
        name: "",
        image: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        temperaments: [],
    });

    const [error, setError] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        setError(
            validate({
                ...form,
                [e.target.name]: e.target.value,
            })
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(Object.values(form)[0]);
        if (
            Object.values(form)[0] !== "" &&
            Object.values(error).length === 0
        ) {
            await axios.post("http://localhost:3001/dogs/", form);
            setForm({
                name: "",
                image: "",
                minHeight: "",
                maxHeight: "",
                minWeight: "",
                maxWeight: "",
                life_span: "",
                temperaments: [],
            });
            return alert("Nueva raza creada con éxito");
        }
        alert("faltan completar campos");
    }

    function handleTemp(e) {
        if (!form.temperaments.includes(e.target.value)) {
            setForm({
                ...form,
                temperaments: [...form.temperaments, e.target.value],
            });
        } else {
            const filter = form.temperaments.filter(
                (t) => t !== e.target.value
            );
            setForm({
                ...form,
                temperaments: filter,
            });
        }
    }

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                {error.name1 ? (
                    <p className="error">{error.name1}</p>
                ) : error.name2 ? (
                    <p className="error">{error.name2}</p>
                ) : null}
                <label>Altura:</label>
                <div className="min-max">
                    <input
                        value={form.minHeight}
                        type="text"
                        placeholder="Mínima"
                        name="minHeight"
                        onChange={handleChange}
                    />
                    <input
                        value={form.maxHeight}
                        type="text"
                        placeholder="Máxima"
                        name="maxHeight"
                        onChange={handleChange}
                    />
                </div>
                {error.height1 ? (
                    <p className="error">{error.height1}</p>
                ) : error.height2 ? (
                    <p className="error">{error.height2}</p>
                ) : error.height3 ? (
                    <p className="error">{error.height3}</p>
                ) : null}
                <label>Peso:</label>
                <div className="min-max">
                    <input
                        value={form.minWeight}
                        type="text"
                        placeholder="Mínimo"
                        name="minWeight"
                        onChange={handleChange}
                    />
                    <input
                        value={form.maxWeight}
                        type="text"
                        placeholder="Máximo"
                        name="maxWeight"
                        onChange={handleChange}
                    />
                </div>
                {error.weight1 ? (
                    <p className="error">{error.weight1}</p>
                ) : error.weight2 ? (
                    <p className="error">{error.weight2}</p>
                ) : error.weight3 ? (
                    <p className="error">{error.weight3}</p>
                ) : null}
                <label>Años de vida:</label>
                <input
                    value={form.life_span}
                    type="text"
                    name="life_span"
                    onChange={handleChange}
                />
                {error.life_span ? (
                    <p className="error">{error.life_span}</p>
                ) : null}
                <label>Imagen:</label>
                <input
                    value={form.image}
                    type="text"
                    name="image"
                    placeholder="URL de la imagen"
                    onChange={handleChange}
                />
                <label>Temperamento:</label>
                <select value={form.temperaments} onChange={handleTemp}>
                    {temperaments.map((temp) => {
                        return <option>{temp.name}</option>;
                    })}
                </select>
                <div className="spans">
                    {form.temperaments.map((temp) => {
                        return <span>{temp}</span>;
                    })}
                </div>
                <div className="crear-container">
                    <button type="submit" className="crear-button">
                        Crear
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
