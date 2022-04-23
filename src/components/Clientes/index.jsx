import React from "react";
import Swal from "sweetalert2";
import Table from "../Table";

const index = ({ clientes, setClientes, setEditCliente }) => {
  const eliminarCliente = (id) => {
    if (clientes.id !== id) {
      Swal.fire({
        icon: "success",
        timer: 1500,
        title: "Cliente eliminado con exito!",
      });
      const updateCliente = clientes.filter((cliente) => cliente.id !== id);
      setClientes(updateCliente);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonText: "Ok",
        text: "No se ha podido eliminar el cliente!",
      });
    }
  };
  return (
    <>
      {clientes && clientes.length === 0 ? (
        <div className="mx-auto lg:w-3/4 xl:w-2/4">
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
        <div className="flex flex-col items-center md:w-1/2 lg:w-2/4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full table-auto shadow bg-white">
                  <thead className="bg-blue-900 text-white uppercase">
                    <tr>
                      <th className="px-4 py-2">Nombre</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Telefono</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  {clientes.map((cliente) => (
                    <Table
                      cliente={cliente}
                      setEditCliente={setEditCliente}
                      eliminarCliente={eliminarCliente}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
