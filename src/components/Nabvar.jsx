import { Link } from "react-router-dom"
import {  Logo, Carrito } from "../assets/img"
import { useState } from "react"


export default function Nabvar() {
  
  let Links =[
    {name:"INICIO",link:"/"},
    {name:"EXCLUSIVOS",link:"/exclusivos"},
    {name:"BUZOS",link:"/buzos"},
    {name:"CAMPERAS",link:"/camperas"},
    {name:"ACCESORIOS",link:"/accesorios"},
  ];

  let [open,setOpen]=useState(false);

  return (
    <div className={`shadow-md w-full ${open ? " sticky z-20 top-0 left-0" : ""}`}>
      <div className='md:flex items-center justify-around bg-black py-4 md:px-10 px-7'>

      <Link to={"/"}>
        <div className="flex justify-center items-center gap-5">
          <img src={Logo} alt="logo" className="h-12 w-12"/>
        <p className="text-white uppercase">Hoddie desing</p>
        </div>
      </Link>
      
      <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

  
       <ul className={`md:flex md:items-center md:pb-0 pb-12 fixed md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white text-lg hover:text-gray-400 duration-300'>{link.name}</Link>
            </li>
          ))
        }

        <Link to={"/carrito"}>
        <img src={Carrito} alt="carrito" className="w-12 h-12 hover:bg-white p-1 rounded-lg  cursor-pointer duration-200 md:ml-52" />
        </Link>

       </ul>

      </div>


      </div>

  )
}
