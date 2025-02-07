import React, { useContext, useEffect, useState } from "react";
import style from "./RandomMeals.module.css";
import { CategoryContext } from "../../Context/categoryContext";
import { useNavigate } from "react-router-dom";

export default function RandomMeals() {
  const [AllProducts, setAllProducts] = useState(null);
  let { getAllCategory } = useContext(CategoryContext);
  let navigate = useNavigate();


  
  async function getAllMeals() {
    let response = await getAllCategory();
    console.log(response)
    if (response.data.meals.length > 0) {
      setAllProducts(response.data.meals);
    }
  }

  function mealDetails(id) {
    navigate(`/productDetails/${id}`);
  }

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <>
      <div className="row">
        {AllProducts?.map((meal) => (
          <div key={meal.idMeal} className="w-full md:w-1/3 lg:w-1/4 text-center py-10 p-3">
            <div className="bg-white rounded-3xl group hover:scale-105 duration-500 hover:sha">
              <img className="w-2/3 rounded-full m-auto relative bottom-10 group-hover:scale-105 duration-500 group-hover:rotate-[360deg]" src={meal.strMealThumb} alt="" />
              <h1 className="font-bold text-xl">{meal.strMeal.split(" ").slice(0, 3).join(" ")}</h1>
              <h3 className="text-green-500 capitalize"><i className="fa-solid fa-earth-americas"></i> {meal.strArea}</h3>
              <button
                onClick={() => mealDetails(meal.idMeal)}
                className="bg-green-500 px-8 py-2 my-5 font-bold text-lg rounded-3xl cursor-pointer text-white"
              >
                 View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
