import React from 'react'
import style from "./Sidebar.module.css"
import logo from "../../assets/logo-BfNap0Pe.png"
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return <>
    <div className='w-0 md:w-2/12 bg-[#F9FAFB] fixed top-0 left-0 bottom-0'>
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <div className='flex flex-col' >
        <Link to="/" className="btn"><i className="fa-solid fa-utensils mx-2"></i> Meals</Link>
        <Link to="/" className="btn2"><i className="fa-solid fa-utensils mx-2"></i> Ingredients</Link>
        <Link to="/" className="btn2"><i className="fa-solid fa-utensils mx-2"></i> Area</Link>
      </div>
    </div>
  </>
}
