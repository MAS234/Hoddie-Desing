import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// CONTEXT
import { CarritoProvider } from './Context/CarritoProvider'

//Importaciones
import Exclusivos from './routes/Exclusivos'
import Buzos from './routes/Buzos'
import Camperas from "./routes/Camperas"
import Accesorios from './routes/Accesorios'
import Inicio from './routes/Inicio'
import Carrito from "./routes/Carrito"
import FinalizarCompra from './routes/FinalizarCompra';
import Error from './routes/Error'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
    errorElement: <Error/>
  },
  {
    path: "/exclusivos",
    element: <Exclusivos/>
  },
  {
    path: "/buzos",
    element: <Buzos/>
  },
  {
    path: "/camperas",
    element: <Camperas/>
  },
  {
    path: "/accesorios",
    element: <Accesorios/>
  },
  {
    path: "/carrito",
    element: <Carrito/>
  },
  {
    path: "/finalizar",
    element: <FinalizarCompra/>
  }
])

function App() {

  return (
    <>
    <CarritoProvider>
    <RouterProvider router={router}/>
    </CarritoProvider>
    <ToastContainer />
    </>
  )
}

export default App

// PEDIENTE:
// QUE SE AGREGUEN TODOS LOS PRODUCTOS AL CARRITO, FALTA ACCESORIOS. LISTO
// CAMBIAR LOS IDS POR QUE SE ROMPEN. LISTO
//MODIFICAR LOS BORDES DE LAS IMAGENES. LISTO
//ARREGLAR TAMAÑOS DE LAS IMAGENES PRINCIPALES. LISTO
// AGREGAR FUNCIONALIDAD A EDITAR. LISTO
// TERMINAR EL RESUMEN DE COMPRA. LISTO
// FINALIZAR LA COMPRA BOTON. LISTO
// CALCULAR LOS PRECIOS. LISTO
//HACERLO RESPONSIVE EL CARRITO LISTO

// HACER PAGINA DE COMPRA
//FORMULARIO DE COMPRA
//HACER EL MODAL DE FINALIZACION DE COMPRA
//TERMINAR LA PAGINA
