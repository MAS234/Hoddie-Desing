import Nabvar from "../components/Nabvar"
import { Link } from "react-router-dom"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

export default function Inicio() {
  return (
    <>
    <Nabvar/>

        {/* EXCLUSIVOS  */}
        <Link to={"/exclusivos"}>
          {/* DIV DE PORTADA, ESTE CONTIENE LA IMAGEN  */}
          <div className=" h-96 w-full portada">
            {/* DIV DE OPACIDAD  */}
              <div className="bg-black h-96 md:h-[100%] w-full opacity-70 flex justify-center items-center flex-col hover:opacity-40 duration-300">
               <p className="text-white text-center font-semibold  text-2xl ">DISEÑOS EXCLUSIVOS</p>
               <p className="text-white w-96 text-center font-bold mt-2">Fabricados con materiales de primera calidad y meticulosa atención al detalle, estos buzos son sinónimo de calidad y excelencia. </p>
            </div>
         </div>
        </Link>
        
        {/* BUZO  */}
        <div className="grid md:grid-cols-2">
          <Link to={"/buzos"}>
          {/* DIV DE PORTADA, ESTE CONTIENE LA IMAGEN  */}
          <div className="portadaBuzo h-[100%] md:h-[100vh] w-full">
            {/* DIV DE OPACIDAD  */}
            <div className="bg-black h-[80vh]  md:h-[100vh] w-full opacity-70 flex justify-center items-center flex-col hover:opacity-40 duration-300">
            <p className="text-white text-center font-semibold  text-2xl ">BUZOS</p>
               <p className="text-white w-96 text-center font-bold mt-2">Ofrecen un estilo y una personalidad incomparables. Cada uno de ellos representa una expresión individual de moda y originalidad. </p>
            </div>
          </div>
          </Link>

          <div className="flex flex-col">

            {/* CAMPERAS  */}
            <div className="portadaCamperas h-[40vh] md:h-[86%] w-full">
            <Link to={"/camperas"}>
            <div className="bg-black h-[40vh] md:h-[100%] w-full opacity-70 flex justify-center items-center flex-col hover:opacity-40 duration-300">
              <p className="text-white text-center font-semibold  text-2xl ">CAMPERAS</p>
               <p className="text-white w-96 text-center font-bold mt-2">Las camperas de buena calidad y diseños únicos no solo protegen del frío, sino que también se convierten en una declaración de estilo </p>
              </div>
            </Link>
            </div>

            {/* ACCESORIOS  */}
            <div className="portadaAccesorios  h-[40vh] md:h-[100%] w-full">
            <Link to={"/accesorios"}>
              <div className="bg-black h-[40vh] md:h-[100%] w-auto opacity-70 flex justify-center items-center flex-col hover:opacity-40 duration-300">
              <p className="text-white text-center font-semibold  text-2xl ">ACCESORIOS</p>
               <p className="text-white w-96 text-center font-bold mt-2">Los accesorios son la clave para agregar un toque distintivo y personal a cualquier atuendo. </p>
              </div>
            </Link>
            </div>

          </div>
        </div>

        <section className="bg-black">

          <h1 className="text-center uppercase text-white p-10 text-2xl">diseños populares</h1>

          <div className="relative h-[100%]">
            <Slider/>
          </div>

        </section>

        <Footer/>
    </>
  )
}
