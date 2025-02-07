import React from 'react'
import style from "./Home.module.css"
import CategoriesList from '../CategoriesList/CategoriesList';
import { Outlet, useParams } from 'react-router-dom';


export default function Home() {
  return <>
  
    <div className="">
    <CategoriesList />
    <Outlet />
    </div>
  </>
}
