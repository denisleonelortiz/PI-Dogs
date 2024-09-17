import { useEffect, useState } from "react";
import Cards from "../cards/cards";
import "./paginado.css";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/action";
import { SwitchTransition, CSSTransition } from "react-transition-group";

function Paginado({ allDogs }) {
    const page = useSelector((state) => state.page);
    const [dogs, setDogs] = useState([]);
    const [paginaActual, setPaginaActual] = useState(page);
    const [total, setTotal] = useState(0)
    const dogsPorPagina = 8;
    const dispatch = useDispatch();

    const changePag = (numPagina) => {
        setPaginaActual(numPagina);
        dispatch(changePage(numPagina));
    };

    useEffect(() => {
        const totalPaginas = Math.ceil(allDogs.length / dogsPorPagina)
        if (totalPaginas < paginaActual)
            setPaginaActual(1);
        if (paginaActual !== page) setPaginaActual(1);
        setTotal(totalPaginas)
        //actualiza los dogs a mostrar en cada cambio de pagina
        const inicio = (page - 1) * dogsPorPagina;
        const fin = inicio + dogsPorPagina;
        const dogsPagina = allDogs.slice(inicio, fin);
        setDogs(dogsPagina);
    }, [paginaActual, allDogs]);


    return (
        <div className="paginado">
            <button
                onClick={() => changePag(paginaActual - 1)}
                disabled={paginaActual === 1}
            >
                {"<"}
            </button>
            <span>Página {page}/{total}</span>
            <button
                onClick={() => changePag(paginaActual + 1)}
                disabled={paginaActual * dogsPorPagina >= allDogs.length}
            >
                {">"}
            </button>
            <SwitchTransition >
                <CSSTransition
                classNames="fade"
                key={page}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                >
                    <Cards dogs={dogs} />
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default Paginado;
