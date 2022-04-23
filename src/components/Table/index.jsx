import React from "react";
import { RiFileEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { HiEye } from "react-icons/hi";

const index = ({ cliente, setEditCliente, eliminarCliente }) => {
  return (
    <>
      <tbody>
        <tr
          className="text-center border-b hover:bg-gray-50 cursor-pointer"
          key={cliente.id}
        >
          <td className="p-3">{cliente.nombre}</td>
          <td className="p-3">{cliente.email}</td>
          <td className="p-3">{cliente.telefono}</td>
          <td className="p-3">
            <div className="flex justify-center items-center">
              <HiEye
                className="text-yellow-500 hover:text-yellow-600 cursor-pointer text-xl"
                onClick={() => onViewClient(cliente.id)}
              />
              <RiFileEditFill
                className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl"
                onClick={() => setEditCliente(cliente.id)}
              />
              <AiFillDelete
                className="text-red-500 hover:text-red-700 cursor-pointer text-xl"
                onClick={() => eliminarCliente(cliente.id)}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default index;
