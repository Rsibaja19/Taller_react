import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "../Alerta";

const index = ({
  cliente,
  clientes,
  setClientes,
  editCliente,
  setEditCliente,
}) => {
  const uniqueId = uuidv4();
  const validarCliente = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es demasiado corto")
      .max(20, "El nombre es demasiado largo")
      .required()
      .typeError("El nombre es requerido"),
    apellido: Yup.string()
      .min(3, "El apellido es demasiado corto")
      .max(20, "El apellido es demasiado largo")
      .required()
      .typeError("El nombre es requerido"),
    email: Yup.string().email().required(),
    barrio: Yup.string(),
    direccion: Yup.string(),
    telefono: Yup.number()
      .positive()
      .integer()
      .min(11, "El numero debe ser de 11 digitos")
      .typeError("El numero no es valido"),
  });

  const handleSubmit = (values) => {
    if (editCliente.id) {
      console.log("Editando cliente");
    } else {
      Swal.fire({
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        text: "Cliente agregado exitosamente!",
      });
      values.id = uniqueId;
      setClientes([...clientes, values]);
    }
  };
  return (
    <div className="lg:w-3/5 mx-5 mb-5">
      <div className="bg-white px-5 py-10 rounded-md shadow-md m-auto">
        <Formik
          initialValues={{
            nombre: cliente?.nombre ?? "",
            apellido: cliente?.apellido ?? "",
            email: cliente?.email ?? "",
            telefono: cliente?.telefono ?? "",
            barrio: cliente?.barrio ?? "",
            direccion: cliente?.direccion ?? "",
            notas: cliente?.notas ?? "",
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
          validationSchema={validarCliente}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  type="text"
                  name="nombre"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingresa el nombre del cliente"
                />
                {errors.nombre && touched.nombre ? (
                  <Alert>{errors.nombre}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="apellido">
                  Apellido:
                </label>
                <Field
                  type="text"
                  name="apellido"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingresa el apellido del cliente"
                />
                {errors.apellido && touched.apellido ? (
                  <Alert>{errors.apellido}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Enter the email of the client"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="telefono">
                  Telefono:
                </label>
                <Field
                  type="tel"
                  name="telefono"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingresa el telefono del cliente"
                />
                {errors.telefono && touched.telefono ? (
                  <Alert>{errors.telefono}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="barrio">
                  Barrio:
                </label>
                <Field
                  type="text"
                  name="barrio"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingrese el barrio del cliente"
                />
                {errors.barrio && touched.barrio ? (
                  <Alert>{errors.barrio}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="direccion">
                  Dirección:
                </label>
                <Field
                  type="text"
                  name="direccion"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingresa la direccion del cliente"
                />
                {errors.direccion && touched.direccion ? (
                  <Alert>{errors.direccion}</Alert>
                ) : null}
              </div>
              <div className="mb-5">
                <label className="text-gray-800 mb-2" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  type="text"
                  name="notas"
                  className="block w-full p-3 bg-gray-50 outline-none h-40"
                  placeholder="Ingresa las notas del cliente"
                />
                {errors.notas && touched.notas ? (
                  <Alert>{errors.notas}</Alert>
                ) : null}
              </div>

              <input
                type="submit"
                value={`${cliente.id ? "Editar cliente" : "Agregar cliente"}`}
                className="w-full bg-blue-800 p-3 uppercase text-white text-lg cursor-pointer"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

index.defaultProps = {
  cliente: {},
};

export default index;
