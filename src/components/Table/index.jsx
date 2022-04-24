import React from "react";

const index = ({ cliente, setEditCliente, eliminarCliente }) => {
  return (
    <>
      <div className="mb-3 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:
          <span className="normal-case font-normal">
            {" "}
            {cliente?.nombre} {cliente?.apellido}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Numero:
          <span className="normal-case font-normal"> {cliente?.telefono}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Barrio:
          <span className="normal-case font-normal"> {cliente?.barrio}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Direccion:
          <span className="normal-case font-normal"> {cliente?.direccion}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:
          <span className="normal-case font-normal"> {cliente?.email}</span>
        </p>
        {cliente?.notas ? (
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Notas:
            <span className="normal-case font-normal"> {cliente?.notas}</span>
          </p>
        ) : null}
        <div className="flex items-center justify-between mt-5">
          <button
            type="button"
            onClick={() => setEditCliente(cliente)}
            className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
          >
            editar
          </button>
          <button
            type="button"
            onClick={() => eliminarCliente(cliente?.id)}
            className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
          >
            eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
