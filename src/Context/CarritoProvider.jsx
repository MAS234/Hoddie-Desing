import { useState, createContext} from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  // STATES
  const [producto, setProducto] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  console.log(carrito)

  // FUNCIONES

  const handleProducto = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      toast.error("El producto ya esta en el carrito");
    } else {
      toast.success("Agregado al carrito");
      setProducto(producto);
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
    toast.success("Producto eliminado del carrito");
  };

  const calcularSubtotal = (producto) => {
    return producto.precio * producto.cantidad;
  };

  const calcularTotal = () => {
    const total = carrito.reduce((accumulator, producto) => {
      const subtotal = calcularSubtotal(producto);
      return accumulator + subtotal;
    }, 0);

    return total;
  };

  const handleSumarCantidad = (producto) => {
    if(producto.cantidad >= 5)return

    const nuevoCarrito = carrito.map((item) => item.id === producto.id ? {...item, cantidad: item.cantidad + 1 } : item)

    setCarrito(nuevoCarrito)
  }

  const handleRestarCantidad = (producto) => {
    if(producto.cantidad <= 1)return

    const nuevoCarrito = carrito.map((item) => item.id === producto.id ? {...item, cantidad: item.cantidad - 1 } : item)

    setCarrito(nuevoCarrito)
  }

  const handleEliminar = (id) => {
    eliminarProducto(id);
  };



  return (
    <CarritoContext.Provider
      value={{
        producto,
        setProducto,
        handleProducto,
        carrito,
        setCarrito,
        eliminarProducto,
        cantidad,
        setCantidad,
        calcularTotal,
        calcularSubtotal,
        handleSumarCantidad,
        handleEliminar,
        handleRestarCantidad
        
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

CarritoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CarritoProvider };

export default CarritoContext;
