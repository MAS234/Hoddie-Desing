import { Icon } from '@iconify/react';
import { camperaVenta } from '../constant/data';
import Nabvar from "../components/Nabvar"
import Footer from '../components/Footer';

import UseCarrito from "../hooks/UseCarrito"

export default function Camperas() {

  const {handleProducto} = UseCarrito();

  return (
    <div className="bg-black">

      <Nabvar/>

      <div className="md:w-[100%] md:h-[100vh] w-full h-[30vh] portadaTiendaCampera flex justify-center items-center flex-col" data-aos="zoom-in">
        <div className="p-10">
        <p className="text-white text-5xl font-bold">CAMPERAS</p>
        <p className="text-white text-2xl text-center">JACKET</p>
        
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 center gap-10 ">
        {camperaVenta.map((campera) => (
          <div key={campera.id} className="m-5 hover:translate-y-[-10px] duration-200">
            <div className="bg-white rounded-xl m-3" data-aos="fade-up"> 
              
              <div className=" rounded-xl">
                <img src={campera.imagen} alt="campera" className=" rounded-xl w-60 h-60"/>
              </div>
           
              <div>
                <p className="text-black font-bold uppercase text-center text-lg">{campera.nombre}</p>

                <div>

                  <p className="text-center text-sm font-bold">Calidad 100%</p>

                  <div className="flex justify-center items-center gap-3 m-2 ext-sm">
                    <p>Colores:</p> 
                    <div className="flex justify-center items-center t">
                      <Icon icon="material-symbols:circle" color="pink" />
                      <Icon icon="material-symbols:circle" color="#f1a014"/>
                      <Icon icon="material-symbols:circle" />
                    </div>
                  </div>

                  <p className="text-center font-bold">{campera.precio}</p>

                  <div className="flex justify-center items-center">
                    <button className="bg-white border text-black hover:text-white hover:bg-black duration-200 p-2 m-3" onClick={() => handleProducto(campera)}>Agregar</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer/>

    </div>
  )
}
