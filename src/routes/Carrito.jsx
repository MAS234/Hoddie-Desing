import Nabvar from "../components/Nabvar";
import UseCarrito from "../hooks/UseCarrito";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer"
import { Logo } from "../assets/img";

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
          <div className="flex flex-col md:flex-row justify-center items-center" data-aos="fade-up">
            <div>
            {carrito.map((producto) => (
              <div key={producto.id}>
                <div className="bg-white grid grid-cols-3 md:m-10 m-5 rounded-xl">
                  <div className="flex">
                    <button
                      className="bg-red-500 hover:bg-red-800 md:w-20 w-8 hover:w-10  duration-200 cursor-pointer flex justify-center items-center redondear"
                      onClick={() => handleEliminar(producto.id)}
                    >
                      <Icon
                        icon="ph:x-bold"
                        color="white"
                        className="md:h-10 h-5 md:w-10 w-5 m-auto"
                      />
                    </button>

                    <div>
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="md:h-40 h-32 md:w-36 w-28"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-center font-bold md:m-5 m-3 mb-5   md:text-xl text-sm">
                      {producto.nombre}
                    </p>

                    <div className="flex  justify-center items-center ">
                      <div className="flex text-white bg-black p-1  justify-center items-center md:w-20 rounded-lg gap-4">
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

                  <div className="border-l-2 border-black flex justify-center items-center font-bold text-center text-lg md:text-xl">
                    <p>{`$ ${calcularSubtotal(producto)}`}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>

            <div className="flex flex-col justify-start items-center">
              <div className="md:w-96 w-72 flex flex-col justify-around items-center bg-white h-96 m-10 rounded-lg">

                <div >
                  <p  className="font-bold text-2xl ">COMPRA</p>
                </div>

                <div >
                  <img src={Logo} alt="logo" className="h-32 w-32"/>
                </div>

                <div className="flex justify-around w-full ">
                  <p className="font-bold text-2xl">TOTAL :</p>
                <p className="font-bold text-2xl">{`$ ${calcularTotal()}`}</p>
                </div>
              </div>

              <button className="md:w-96 w-72   text-center text-white bg-green-400 p-2 rounded-md text-2xl font-bold hover:bg-green-600 duration-200">FINALIZAR COMPRA</button>
            </div>

          </div>
        )}
      </div>

      <Footer/>

    </div>
  );
}
