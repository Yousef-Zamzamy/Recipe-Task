import axios from "axios";
import React, { createContext } from "react";

export let CategoryContext = createContext();
export default function CategoryContextProvider(props) {
  function getCategory(category) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res)
      .catch((err) => err);
  }


  function getAllCategory() {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      .then((res) => res)
      .catch((err) => err);
  }


  function getMealDetails(id) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res)
      .catch((err) => err);
  }



  return (
    <CategoryContext.Provider value={ { getCategory, getAllCategory, getMealDetails} }>
      {props.children}
    </CategoryContext.Provider>
  );
}
