import { useContext } from "react";
import CarritoContext from "../Context/CarritoProvider";

const UseCarrito = () => {
    return useContext(CarritoContext)
}

export default UseCarrito;