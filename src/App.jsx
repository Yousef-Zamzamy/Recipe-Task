import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ProductDetails from "./components/productDetails/productDetails";
import Category from "./components/Category/Category";
import RandomMeals from './components/RandomMeals/RandomMeals';
import CategoryContextProvider from "./Context/categoryContext";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          { index : true, element: <RandomMeals /> },
          { path: "/:category", element: <Category /> },
        ],
      },
      { path: "productDetails/:id", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <CategoryContextProvider>
        <RouterProvider router={x}></RouterProvider>
      </CategoryContextProvider>
    </>
  );
}

export default App;
