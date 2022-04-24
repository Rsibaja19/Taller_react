import React from "react";
import Swal from "sweetalert2";
import Table from "../Table";

const index = ({ clientes, setClientes, setEditCliente }) => {
  const eliminarCliente = (id) => {
    if (clientes.id !== id) {
      Swal.fire({
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        title: "Cliente eliminado con exito!",
      });
      const updateCliente = clientes.filter((cliente) => cliente.id !== id);
      setClientes(updateCliente);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 1500,
        showConfirmButton: false,
        text: "No se ha podido eliminar el cliente!",
      });
    }
  };
  return (
    <>
      {clientes && clientes.length === 0 ? (
        <div className="lg:w-3/5">
          <h2 className="font-black text-3xl text-center mb-1">
            No hay clientes
          </h2>
          <p className="text-xl text-center mb-5 ">
            Añade clientes {""}
            <span className="text-indigo-600 font-bold">
              {" "}
              y visualiza su seguimiento
            </span>
          </p>
        </div>
      ) : (
        <div className="lg:w-3/5">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {clientes.map((cliente) => (
              <Table
                key={cliente.id}
                cliente={cliente}
                setEditCliente={setEditCliente}
                eliminarCliente={eliminarCliente}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default index;
