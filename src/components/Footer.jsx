import { Icon } from '@iconify/react';
import { Logo } from "../assets/img";

export default function Footer() {
  return (
    <>

        <footer className=" bg-black p-20">

        <div className="flex  justify-around items-center gap-10 text-sm md:gap-5 md:text-base text-white">
        <div>
            <img src={Logo} alt="logo" className="h-24 w-24"/>
        </div>

        <div>
            <p>Compañia</p>
            <p>Nosotros</p>
            <p>Ayuda</p>
        </div>

        <div>
            <p>Visita</p>
            <p>Sobre Hoddie Desing</p>
        </div>

        <div>
            <p>Mobile</p>
            <p>Play Store</p>
            <p>Ios</p>
        </div>
        </div>

        <div className="flex justify-center items-center mt-20 gap-10">
        <div>
        <Icon icon="material-symbols:mail-outline" color="white" className=" h-12 w-12 hover:bg-red-500 cursor-pointer duration-300 rounded-lg p-1"/>
        </div>

        <div>
        <Icon icon="mingcute:ins-line" color="white" className="
        h-12 w-12 hover:bg-violet-600 cursor-pointer duration-300 rounded-lg p-1"/>
        </div>

        <div>   
        <Icon icon="mdi:facebook" color="white" className=" h-12 w-12 hover:bg-blue-600 cursor-pointer duration-300 rounded-lg p-1"/>
        </div>

        <div>
        <Icon icon="ic:baseline-whatsapp" color="white" className=" h-12 w-12 hover:bg-green-500 cursor-pointer duration-300 rounded-lg p-1"/>
        </div>

        </div>

        </footer>
      
    </>
  )
}
