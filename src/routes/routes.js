import React, { useEffect } from "react";
import { Routes, Route,Navigate, useNavigate } from "react-router-dom"; 
import Home from "../pages/Home"; 

const routes = [
  {
    path: "/",
    exact: true,
    element : <Home />,
    private : false,
  },
  

]


export default function Navigation() {
 
 
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={
           route.element
          } />
      ))}
     
    </Routes>
  );
}
