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
    const switcher = useSelector((state) => state.refresh)
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const [dogToSearch, setDogToSearch] = useState("");

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
    }

    useEffect(() => {
        if(!allDogs.length) dispatch(getAllDogs());
        if(!allTemperaments.length) dispatch(getTemperaments());
    }, [dispatch, switcher]);

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
            <Paginado allDogs={allDogs} />
        </div>
    );
}

export default Home;
