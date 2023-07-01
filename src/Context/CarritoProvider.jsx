import { useState, createContext,} from "react"
import PropTypes from "prop-types";
import { toast } from "react-toastify"


const CarritoContext = createContext();


const CarritoProvider = ({children}) => {

    // STATES 
    const [producto, setProducto] = useState({})
    const [carrito, setCarrito] = useState([])
    

    // FUNCIONES 

    const handleProducto = producto => {

        const productoExistente = carrito.find(item => item.id === producto.id);

        if(productoExistente){
            toast.error("El producto ya esta en el carrito") 
        }
        else{
            toast.success("Agregado al carrito") 
            setProducto(producto)
            setCarrito([...carrito, producto])
        }

        

    }

    const eliminarProducto = id => {
        const nuevoCarrito = carrito.filter(item => item.id !== id);
        setCarrito(nuevoCarrito);
        toast.success("Producto eliminado del carrito");
    }

    

    


  return (
    <CarritoContext.Provider 
    value={{
        producto,
        setProducto,
        handleProducto,
        carrito,
        eliminarProducto
    }}
    >
        {children}
    </CarritoContext.Provider>
  )
}

CarritoProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export{
    CarritoProvider
}

export default CarritoContext
