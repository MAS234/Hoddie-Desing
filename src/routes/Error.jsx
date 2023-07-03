import Nabvar from "../components/Nabvar"

export default function Error() {
  return (
    <div className="bg-black h-[100vh]">
      <Nabvar/>
      <div className="flex flex-col gap-6 justify-center items-center mt-56">
      <h1 className="text-red-600 text-5xl font-bold">ERROR</h1>
      <h1 className="text-white text-5xl font-bold">NO SE ENCONTRO LA RUTA</h1>
      </div>
    </div>
  )
}
