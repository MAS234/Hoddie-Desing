import Logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  Master,
  Visa,
  Cabal,
  America,
  MercadoCredito,
  MercadoPago,
} from "../assets/img";
import UseCarrito from "../hooks/UseCarrito";

function FinalizarCompra() {
  const { total } = UseCarrito();

  const [error, setError] = useState(false)
  const [exito, setExito] = useState(false)

  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");
  const [fecha, setFecha] = useState("");
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(numeroTarjeta === "" || codigoSeguridad === "" || fecha === "" || dni === "" || nombre === "" || mail=== "" ){
      setError(true)
      setExito(false)

    }
    else{
      setError(false)
      setExito(true)
    }

  }

  return (
    <div className="bg-black">
      <nav className="flex justify-around items-center">
        <div>
          <img src={Logo} alt="logo" className="h-20 w-20" />
        </div>

        <p className="text-center- text-white md:text-2xl text-lg font-bold">
          ¡HACE TU PAGO!
        </p>

        <p className="text-center- text-white">HODDIE DESING</p>
      </nav>

      <div className="grid md:grid-cols-2 ">
        <div className="flex flex-col">
          <div className="bg-white md:w-full w-80 h-full m-10 rounded-xl p-2 ">
            <div className="flex justify-around items-center border-b-2 border-black">
              <p className="font-bold text-xl m-5 u">Datos de la tarjeta</p>
              <img src={Master} alt="master" className="h-10" />
            </div>

            <div className="h-3 m-5">
            {error && <p className="text-center text-red-600 text-sm">Todos los campos deben ser completados</p>}
            {exito && <p className="text-center text-green-500 text-sm">Realizado con exito</p>}
          </div>

            <form action="" >

              <div className="flex flex-col p-2 m-2">
                <label htmlFor="numeroTarjeta" className="font-bold text-xs">
                  Numero de tarjeta
                </label>
                <input
                  type="number"
                  className="md:w-64 w-56 desactivarEstilos bg-slate-100 rounded-md p-1"
                  onChange={(e) => setNumeroTarjeta(e.target.value)}
                />
              </div>

              <div className="md:flex flex-auto">
                <div className=" m-2 flex flex-col ">
                  <label htmlFor="seguridad" className="font-bold text-xs">
                    Cod. Seguridad
                  </label>
                  <input
                    type="number"
                    className=" desactivarEstilos bg-slate-100 rounded-md p-1 md:w-full w-56"
                   onChange={(e) => setCodigoSeguridad(e.target.value)}

                  />
                </div>

                <div className=" m-2 flex flex-col ">
                  <label htmlFor="fecha" className="font-bold text-xs">
                    Fechas Venc.
                  </label>
                  <input
                    type="date"
                    className=" desactivarEstilos bg-slate-100 rounded-md p-1 md:w-full w-56"
                   onChange={(e) => setFecha(e.target.value)}

                  />
                </div>

                <div className=" m-2 flex flex-col ">
                  <label htmlFor="dni" className="font-bold text-xs">
                    DNI
                  </label>
                  <input
                    type="number"
                    className="md:w-full w-56 desactivarEstilos bg-slate-100 rounded-md p-1" 
                   onChange={(e) => setDni(e.target.value)}

                  />
                </div>
              </div>

              <div className="p-2 m-2 flex flex-col ">
                <label htmlFor="nombre" className="font-bold text-xs">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="md:w-64 w-56 desactivarEstilos bg-slate-100 rounded-md p-1 "
                  onChange={(e) => setNombre(e.target.value)}

                />
              </div>

            </form>

            <div className="flex justify-around items-center border-t-2 border-black">
              <p className="text-2xl font-bold mt-5">Total a pagar</p>
              <p className="text-2xl font-bold mt-5">${total}</p>
            </div>
          </div>

          <div className="bg-white w-80 md:w-full m-10 mt-2 p-5 rounded-xl flex flex-col">

          <div className="h-1 m-2 mb-5">
            {error && <p className="text-center text-red-600 text-sm">Todos los campos deben ser completados</p>}
            {exito && <p className="text-center text-green-500 text-sm">Realizado con exito</p>}
          </div>

            <label htmlFor="mail" className="font-bold">
              Mail de Facturacion
            </label>
            <input
              type="email"
              className="desactivarEstilos w-64  bg-slate-100 rounded-md p-1"
              onChange={(e) => setMail(e.target.value)}

            />
          </div>

          <div className="flex justify-center items-center">
            <button 
            className="text-white text-2xl bg-green-400 p-2 rounded-lg hover:bg-green-600 duration-200 w-36 font-bold"
            onClick={handleSubmit}
            >
              PAGAR
            </button>
          </div>
        </div>

        <div className="flex justify-center items-start m-10">
          <div className="bg-white w-80 md:w-96 h-full p-2 rounded-lg">

          <div className="h-3 m-5">
            {error && <p className="text-center text-red-600 text-sm">Todos los campos deben ser completados</p>}
            {exito && <p className="text-center text-green-500 text-sm">Realizado con exito</p>}
          </div>

            <p className="text-center font-bold text-xl">Formas de pago</p>

            <div className="m-10">
              <div className=" gap-3 flex items-center">
                <input type="radio" name="pagos" id="credito"/>
                <label htmlFor="credito" className="font-bold">
                  Tarjeta de credito
                </label>
              </div>
              <div className="flex gap-4 mt-3">
                <img src={America} alt="america" className="w-12 h-10" />
                <img src={Visa} alt="visa" className="w-12 h-10" />
                <img src={Cabal} alt="cabal" className="w-12 h-10" />
              </div>
            </div>

            <div className="m-10 ">
              <div className=" gap-3 flex">
                <input type="radio" name="pagos" id="debito"/>
                <label htmlFor="debito" className="font-bold">
                  Tarjeta de debito
                </label>
              </div>
              <div className="flex gap-4 mt-3 items-center">
                <img src={Master} alt="america" className="w-20 h-12" />
                <img src={Visa} alt="visa" className="w-20 h-16" />
              </div>
            </div>

            <div className="m-10">
              <div className=" gap-3 flex items-center">
                <input type="radio" name="pagos" id="Mercado Pago"/>
                <label htmlFor="Mercado Pago" className="font-bold">
                  Mercado Pago
                </label>
              </div>
              <div className="flex gap-4 mt-3">
                <img src={MercadoPago} alt="america" className="w-28 h-10" />
                <img src={MercadoCredito} alt="visa" className="w-24 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FinalizarCompra;
