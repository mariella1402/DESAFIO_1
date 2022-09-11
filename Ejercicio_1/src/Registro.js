import React from "react";
import { Layout } from "./components/Layout";

const Registro = () => {
  const datos = localStorage.getItem("datos");
  const infomacion = JSON.parse(datos);
  return (
    <Layout>
      <span class="badge bg-success">
          <h3 class="text-center">El registro se completo con exito</h3>
      </span>
      <th><br/><br/>
        <h3><u>Los datos ingresados son: </u></h3>
      </th>
      
      <div class="table-responsive border border-dark text-left">
        <table class="table">
          <tr>
            <th class="table-secondary">Nombre Completo:</th>
            <th>{infomacion.nombres + " " + infomacion.apellidos}</th>
          </tr>
          <tr>
            <th class="table-secondary">Genero:</th>
            <th>{infomacion.genero}</th>
          </tr>
          <tr>
            <th class="table-secondary">Dui:</th>
            <th>{infomacion.dui}</th>
          </tr>
          <tr>
            <th class="table-secondary">Fecha de nacimiento:</th>
            <th>{infomacion.fecha}</th>
          </tr>
          <tr>
            <th class="table-secondary">Direccion:</th>
            <th>{infomacion.direccion}</th>
          </tr>
          <tr>
            <th class="table-secondary">Municipio:</th>
            <th>{infomacion.municipio}</th>
          </tr>
          <tr>
            <th class="table-secondary">Departamento:</th>
            <th>{infomacion.departamento}</th>
          </tr>
        </table>
      </div>
    </Layout>
  );
};

export default Registro;
