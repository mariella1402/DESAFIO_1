import React from "react";

export const Layout = ({children}) => {
  return (
    <div class="App">
      <header class="App-header">
      <u><h2>CLINICA DENTAL</h2></u>
        <h3>Registro de nuevo paciente</h3>
      </header>
      <main class="body">
        <div class="container mt-5">
          {children}
        </div>
      </main>
    </div>
  );
};
