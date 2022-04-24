import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/FormCliente";
import Clientes from "../components/Clientes";

const index = () => {
  const [clientes, setClientes] = useState([]);
  const [editCliente, setEditCliente] = useState({});
  return (
    <div className="container-1440">
      <Header />
      <div className="mt-3 lg:flex justify-center gap-3">
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
