import Nabvar from "../components/Nabvar"

import { Logo } from "../assets/img"

export default function Accesorios() {
  return (
    <>
      <Nabvar/>
      <div className=" bg-red-500">
        <img className="h-32 w-32" src={Logo} alt="logo" />
      </div>
    </>
  )
}
