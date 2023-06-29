import Nabvar from "../components/Nabvar"
import Footer from "../components/Footer"
import { ventaAccesorios } from "../constant/data"




export default function Accesorios() {
  return (
    <>

    <div className="bg-black">

    <Nabvar/>

      <div className="md:w-[100%] md:h-[100vh] w-full h-[30vh] portadaTinedaAccesorio flex justify-center items-center flex-col" data-aos="zoom-in">
          <div className="p-10">
          <p className="text-white text-5xl font-bold">ACCESORIOS</p>
          <p className="text-white text-2xl text-center uppercase">accessories</p>
          </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 center gap-10 ">
        {ventaAccesorios.map((accesorio) => (
          <div key={accesorio.id} className="m-5 hover:translate-y-[-10px] duration-200">
            <div className="bg-white rounded-xl m-3" data-aos="fade-up">
              
              <div className=" rounded-xl">
                <img src={accesorio.imagen} alt="accesorio" className=" rounded-xl w-60 h-72"/>
              </div>
           
              <div className="flex flex-col gap-5">
                <p className="text-black font-bold uppercase text-center text-lg">{accesorio.nombre}</p>

                <div>

                  <p className="text-center text-sm font-bold">Calidad 100%</p>
   

                  <p className="text-center font-bold">{accesorio.precio}</p>

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
