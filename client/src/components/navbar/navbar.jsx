import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { home } from "../../redux/action";

function Navbar({
    handleChange,
    handleSubmit,
    allTemperaments,
    handleFilter,
    handleOrder,
    dogToSearch,
}) {
    const dispatch = useDispatch();

    const back = () => {
        dispatch(home());
    };
    return (
        <div className="navbar-container">
            <div className="searchbar-container">
                <input
                    value={dogToSearch}
                    type="text"
                    placeholder="Ingresar raza"
                    onChange={handleChange}
                />
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className="search-button"
                >
                    Buscar
                </button>
                <button className="create-button" onClick={() => back()}>
                    Home
                </button>
                <NavLink to={"/create"}>
                    <button className="create-button">Crear</button>
                </NavLink>
            </div>
            <div className="filters-container">
                <div className="filters">
                    <span>Filtrar por:</span>
                    <select onChange={handleFilter}>
                        <option disabled selected>
                            Temperamentos
                        </option>
                        <option>Todos</option>
                        {allTemperaments?.map((temp) => {
                            return <option>{temp.name}</option>;
                        })}
                    </select>
                    <select onChange={handleFilter}>
                        <option disabled selected>
                            Origen
                        </option>
                        <option>Api</option>
                        <option>Base de datos</option>
                        <option>Todos</option>
                    </select>
                </div>
                <div className="orders">
                    <span>Ordenar por:</span>
                    <select onChange={handleOrder}>
                        <option disabled selected>
                            Orden alfabetico
                        </option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                    </select>
                    <select onChange={handleOrder}>
                        <option disabled selected>
                            Por peso
                        </option>
                        <option>Menor peso</option>
                        <option>Mayor peso</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
