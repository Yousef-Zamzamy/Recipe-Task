import React from "react";
import style from "./Layout.module.css";
import Sidebar from "./../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Categories from "../CategoriesList/CategoriesList";


export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="container w-10/12 float-end bg-[#F4F2EE]">
        <Outlet />
      </div>
    </>
  );
}
