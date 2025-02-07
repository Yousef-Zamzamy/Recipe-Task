import React, { useEffect, useState } from "react";
import stylr from "./CategoriesList.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function CategoriesList() {

  const [allCategories, setallCategories] = useState(null);
  let navigate = useNavigate()

  async function allCategoriesCall() {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setallCategories(res.data.categories);
      })
      .catch((err) => console.log(err));
  }

  function categoryMeals(meal){
    navigate(`/category/${meal}`);
  }

  useEffect(() => {
    allCategoriesCall();
  }, []);

  return (
    <>
      <div className="p-5 my-5">
        <h1 className="py-5 font-[pacifico] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F29724] to-[#c90519]">Learn, Cook, Eat Your Food</h1>
        <div className="flex gap-2 flex-wrap font-[cursive]">
          <NavLink to={`/`} className="btn3">
            All
          </NavLink>
          {allCategories?.map((category) => (
            <NavLink
              onClick={() => categoryMeals(category.strCategory)}
              to={`${category.strCategory}`}
              key={category.idCategory}
              className="btn3"
            >
              {category.strCategory}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
