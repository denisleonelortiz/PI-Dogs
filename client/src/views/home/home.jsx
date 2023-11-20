import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";
import Navbar from "../../components/navbar/navbar";
import {
    filterDogs,
    getAllDogs,
    getDogsByName,
    getTemperaments,
    orderDogs,
} from "../../redux/action";
import Paginado from "../../components/paginado/paginado";

function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const [dogToSearch, setDogToSearch] = useState("");
    const [aux, setAux] = useState(false);

    function handleChange(e) {
        setDogToSearch(e.target.value.toLowerCase());
    }

    function handleSubmit() {
        dispatch(getDogsByName(dogToSearch));
        setDogToSearch("");
    }

    function handleFilter(e) {
        dispatch(filterDogs(e.target.value));
    }

    function handleOrder(e) {
        dispatch(orderDogs(e.target.value));
        setAux(!aux);
    }

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments());
    }, [dispatch]);

    return (
        <div className="home">
            <Navbar
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                allTemperaments={allTemperaments}
                handleFilter={handleFilter}
                handleOrder={handleOrder}
                dogToSearch={dogToSearch}
            />
            <Paginado allDogs={allDogs} aux={aux} />
        </div>
    );
}

export default Home;
