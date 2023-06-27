import Nabvar from "../components/Nabvar"
import { ventaExclusivos, } from "../constant/data"
import { Icon } from '@iconify/react';


export default function Exclusivos() {
  return (
    <div className="bg-black">
      <Nabvar/>

      <div className="md:w-[100%] md:h-[100vh] w-full h-[30vh] portadaTinedaExclusivos flex justify-center items-center flex-col">
        <div className="p-10">
        <p className="text-white text-5xl font-bold text-center">DISEÑOS EXCLUSIVOS</p>
        <p className="text-white m-10 text-xl text-center">Descubre nuestra exclusiva colección de buzos de alta calidad con diseños modernos en nuestra tienda online. Cada pieza ha sido cuidadosamente confeccionada con materiales premium para brindarte la máxima comodidad y durabilidad. </p>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col justify-center items-center center ">
          {ventaExclusivos.map((exclusivo) => (
            <div key={exclusivo.id} className="bg-white  rounded-md grid grid-cols-3 w-[60%] m-12">
              <div>
                <img src={exclusivo.imagen} alt={exclusivo.nombre} className="h-72 w-60 rounded-md"/>
              </div>

              <div className="flex flex-col justify-around items-center">
                <p className="text-center font-bold uppercase">{exclusivo.nombre}</p>
                <img src={exclusivo.icono} alt={exclusivo.nombre} className="h-40 w-44"/>
                <div>
                  <button className="text-white bg-red-500 p-1 rounded-sm hover:bg-red-600 duration-200">AGREGAR</button>
                </div>
              </div>

              <div className="flex flex-col justify-around items-center">
                <p className="text-center font-black text-2xl">EXCLUSIVOS</p>

                <div>
                <p className="text-center ">Algodon 100%</p>
                <p className="text-center uppercase">Estampados</p>
                </div>


                <div className="flex justify-center items-center gap-1 ">
                  <p className="font-bold">colores:</p>
                      <Icon icon="material-symbols:circle" color="red" />
                      <Icon icon="material-symbols:circle" color="#f1a014"/>
                      <Icon icon="material-symbols:circle" />
                </div>

                <p className="font-bold text-xl ">{exclusivo.precio}</p>
              </div>
            </div>
          ))}
        </div>
      <div/>

      
    </div>
    </div>
  )
}
