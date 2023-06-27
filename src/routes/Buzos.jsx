import Nabvar from "../components/Nabvar"
import { BuzoVenta } from "../constant/data"
import { Icon } from '@iconify/react';
import Footer from "../components/Footer";

export default function Buzos() {
  return (
    <>
    <div className="bg-black">
      <Nabvar/>

      <div className="md:w-[100%] md:h-[100vh] w-full h-[30vh] portadaTiendaBuzo flex justify-end items-center flex-col">
        <div className="p-10">
        <p className="text-white text-5xl font-bold">BUZOS</p>
        <p className="text-white text-2xl text-center">HODDIES</p>
        </div>
      </div>

  
      <div className="grid md:grid-cols-3 grid-cols-1 center gap-10 ">
        {BuzoVenta.map((buzo) => (
          <div key={buzo.id} className="m-5">
            <div className="bg-white rounded-xl m-3">
              
              <div className=" rounded-xl">
                <img src={buzo.imagen} alt="buzo" className=" rounded-xl w-60 h-72"/>
              </div>
           
              <div>
                <p className="text-black font-bold uppercase text-center text-lg">{buzo.nombre}</p>

                <div>

                  <p className="text-center text-sm font-bold">Aldogon 100%</p>

                  <div className="flex justify-center items-center gap-3 m-2 ext-sm">
                    <p>Colores:</p> 
                    <div className="flex justify-center items-center t">
                      <Icon icon="material-symbols:circle" color="red" />
                      <Icon icon="material-symbols:circle" color="#f1a014"/>
                      <Icon icon="material-symbols:circle" />
                    </div>
                  </div>

                  <p className="text-center font-bold">{buzo.precio}</p>

                  <div className="flex justify-center items-center">
                    <button className="bg-white border text-black hover:text-white hover:bg-black duration-200 p-2 m-3 ">Agregar</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer/>

    </div>
    </>
  )
}
