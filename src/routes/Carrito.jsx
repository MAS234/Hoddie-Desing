import Nabvar from "../components/Nabvar";
import UseCarrito from "../hooks/UseCarrito";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer"

export default function Carrito() {

  const { carrito, calcularSubtotal, calcularTotal, handleEliminar, handleRestarCantidad, handleSumarCantidad  } = UseCarrito();

  return (
    <div className="bg-black h-full">
      <Nabvar />

      <h1 className="text-white text-center font-bold text-xl">
        FINALIZA TU COMPRA
      </h1>

      <div className="flex justify-between items-center m-10">
        {carrito.length === 0 ? (
          <p className="text-white font-bold text-2xl text-center m-20">
            AUN NO HAY PRODUCTOS
          </p>
        ) : (
          <div className="flex">
            <div>
            {carrito.map((producto) => (
              <div key={producto.id}>
                <div className="bg-white grid grid-cols-3 m-10 rounded-xl">
                  <div className="flex">
                    <button
                      className="bg-red-500 hover:bg-red-800 w-20  duration-200 cursor-pointer flex justify-center items-center redondear"
                      onClick={() => handleEliminar(producto.id)}
                    >
                      <Icon
                        icon="ph:x-bold"
                        color="white"
                        className="h-10 w-10 m-auto"
                      />
                    </button>

                    <div>
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="h-40 w-36"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-center font-bold m-5 text-xl">
                      {producto.nombre}
                    </p>

                    <div className="flex  justify-center items-center">
                      <div className="flex text-white bg-black p-1  justify-center items-center w-20 rounded-lg gap-4">
                        <button 
                        className="hover:bg-red-500 duration-200 bg-black p-1 rounded-sm"
                        onClick={() => handleRestarCantidad(producto)}
                        >
                          -
                        </button>
                        <p>{producto.cantidad}</p>
                        <button 
                        className="hover:bg-green-500 duration-200 bg-black p-1 rounded-sm"
                        onClick={() => handleSumarCantidad(producto)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-black flex justify-center items-center font-bold text-center text-xl">
                    <p>{`$ ${calcularSubtotal(producto)}`}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>

            <div className="flex justify-start sticky">
              <div className="w-96 flex justify-center items-center bg-white h-96 m-10 rounded-xl font-bold text-2xl">
                {`$ ${calcularTotal()}`}
              </div>
            </div>

          </div>
        )}
      </div>

      <Footer/>

    </div>
  );
}
