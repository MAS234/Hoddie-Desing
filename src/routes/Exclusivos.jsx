import Nabvar from "../components/Nabvar";
import { ventaExclusivos } from "../constant/data";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";

export default function Exclusivos() {
  return (
    <div className="bg-black">
      <Nabvar />

      <div className="md:w-[100%] md:h-[100vh] w-full h-[30vh] portadaTinedaExclusivos flex justify-center items-center flex-col">
        <div className="p-10">
          <p className="text-white md:text-5xl text-lg font-bold text-center">
            DISEÑOS EXCLUSIVOS
          </p>
          <p className="text-white md:m-10 m-2 md:text-xl text-sm text-center">
            Descubre nuestra exclusiva colección de buzos de alta calidad con
            diseños modernos. Cada pieza ha sido cuidadosamente confeccionada
            con materiales premium para brindarte la máxima comodidad y
            durabilidad.{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center center ">
          {ventaExclusivos.map((exclusivo) => (
            <div
              key={exclusivo.id}
              className="bg-white  rounded-md grid grid-cols-3 md:w-[60%] w-[90%] m-12"
            >
              <div>
                <img
                  src={exclusivo.imagen}
                  alt={exclusivo.nombre}
                  className="md:h-72  md:w-60 h-44  rounded-md"
                />
              </div>

              <div className="flex flex-col justify-around items-center">
                <p className="text-center font-bold uppercase md:text-base text-sm">
                  {exclusivo.nombre}
                </p>
                <img
                  src={exclusivo.icono}
                  alt={exclusivo.nombre}
                  className="md:h-40 md:w-44 h-20 w-20"
                />
                <div>
                  <button className="text-white bg-red-500 p-1 rounded-sm hover:bg-red-600 duration-200">
                    AGREGAR
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-around items-center ">
                <p className="text-center font-black md:text-2xl text-lg">
                  EXCLUSIVOS
                </p>

                <div>
                  <p className="text-center md:text-base text-sm">
                    Algodon 100%
                  </p>
                  <p className="text-center md:text-base text-sm uppercase font-bold">
                    Estampados
                  </p>
                </div>

                <div className="flex justify-center items-center md:gap-1">
                  <p className="font-bold md:text-base text-sm">colores:</p>
                  <Icon icon="material-symbols:circle" color="red" />
                  <Icon icon="material-symbols:circle" color="#f1a014" />
                  <Icon icon="material-symbols:circle" />
                </div>

                <p className="font-bold text-xl ">{exclusivo.precio}</p>
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
      <Footer/>
    </div>
  );
}
