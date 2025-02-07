import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { CategoryContext } from "../../Context/categoryContext";
import { NavLink, useParams } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams();
  const [mealDetails, setmealDetails] = useState(null);
  let { getMealDetails } = useContext(CategoryContext);

  async function getDetails(id) {
    let response = await getMealDetails(id);
    console.log(response);
    if (response?.data.meals.length > 0) {
      setmealDetails(response.data.meals[0]);
    }
  }

  useEffect(() => {
    getDetails(id);
  }, []);
  return (
    <>
      <div className="row font-[cursive] my-8 mb-48 flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h1 className="font-[pacifico] font-bold text-3xl">{mealDetails?.strMeal}</h1>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 p-2">
              <img
                className="w-full rounded-3xl"
                src={mealDetails?.strMealThumb}
                alt=""
              />
              <div className="flex justify-center py-5">
                <NavLink
                  to={mealDetails?.strYoutube}
                  className="bg-red-600 py-2 px-5 rounded-lg mx-2 text-white text-lg"
                >
                  <i className="fa-brands fa-youtube"></i> youtube
                </NavLink>
                <NavLink
                  to={mealDetails?.strSource}
                  className="bg-green-600 py-2 px-5 rounded-lg mx-2 text-white text-lg"
                >
                  <i className="fa-solid fa-globe"></i> source
                </NavLink>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <p>{mealDetails?.strInstructions}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white m-5 p-5 rounded-3xl">
            <h3 className="text-2xl font-bold border-b-4 my-2 py-2">Ingredients</h3>
            <div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient1}:</div> <div>{mealDetails?.strMeasure1}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient2}:</div> <div>{mealDetails?.strMeasure2}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient3}:</div> <div>{mealDetails?.strMeasure3}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient4}:</div> <div>{mealDetails?.strMeasure4}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient5}:</div> <div>{mealDetails?.strMeasure5}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient6}:</div> <div>{mealDetails?.strMeasure6}</div>
              </div>
              <div className="text-md border-b-2 py-2 flex justify-between">
                <div>{mealDetails?.strIngredient7}:</div> <div>{mealDetails?.strMeasure7}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
