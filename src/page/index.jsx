import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/FormCliente";
import Clientes from "../components/Clientes";

const index = () => {
  const [clientes, setClientes] = useState([]);
  const [editCliente, setEditCliente] = useState({});
  return (
    <div className="container-1440 mx-auto mt-5">
      <Header />
      <div className="mt-5 xl:flex justify-center pb-4 scroll">
        <Formulario
          clientes={clientes}
          setClientes={setClientes}
          editCliente={editCliente}
          setEditCliente={setEditCliente}
        />
        <Clientes
          clientes={clientes}
          setClientes={setClientes}
          setEditCliente={setEditCliente}
        />
      </div>
    </div>
  );
};

export default index;
