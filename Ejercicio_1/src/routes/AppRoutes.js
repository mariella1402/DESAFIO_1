import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Formulario from "../Formulario";
import Registro from '../Registro';

export const AppRoutes = () => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Formulario/>} />
            <Route path="/registro" element={<Registro/>} />
        </Routes>
    </BrowserRouter>
  )
}
