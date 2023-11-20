import { useEffect, useState } from "react";
import Cards from "../cards/cards";
import "./paginado.css";

function Paginado({ allDogs, aux }) {
    const [dogs, setDogs] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const dogsPorPagina = 8;

    const changePage = (numPagina) => {
        setPaginaActual(numPagina)
    };

    useEffect(() => {
        if(Math.ceil(allDogs.length/dogsPorPagina)<paginaActual) {setPaginaActual(1)}
        const inicio = (paginaActual - 1) * dogsPorPagina;
        const fin = inicio + dogsPorPagina;
        const dogsPagina = allDogs.slice(inicio, fin);
        setDogs(dogsPagina);
    }, [paginaActual, allDogs, aux]);

    return (
        <div className="paginado">
            <button onClick={() => changePage(paginaActual-1)} disabled = {paginaActual===1}>{"<"} Anterior</button>
            <span>Página {paginaActual}</span>
            <button onClick={() => changePage(paginaActual+1)} disabled = {paginaActual*dogsPorPagina>=allDogs.length}>Próxima {">"}</button>
            <Cards dogs={dogs} />
        </div>
    );
}

export default Paginado;
