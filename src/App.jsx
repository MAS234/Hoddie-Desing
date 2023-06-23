import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Importaciones
import Exclusivos from './routes/Exclusivos'
import Buzos from './routes/Buzos'
import Camperas from "./routes/Camperas"
import Accesorios from './routes/Accesorios'
import Inicio from './routes/Inicio'
import Carrito from "./routes/Carrito"
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
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
