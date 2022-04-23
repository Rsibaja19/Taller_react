import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "../Alerta";

const index = ({ cliente, clientes, setClientes, editCliente, setEditCliente }) => {
  const uniqueId = uuidv4();
  const validarCliente = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es demasiado corto")
      .max(40, "El nombre es demasiado largo")
      .required().typeError("El nombre es requerido"),
    edad: Yup.string().max(2, "Ingrese una edad correcta").required().typeError("La edad es requerida"),
    sexo: Yup.string().required().typeError("El sexo es requerido"),
    email: Yup.string().email().required(),
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
        text: "Cliente agregado exitosamente!",
      });
      values.id = uniqueId;
      setClientes([...clientes, values])
    }
  };
  return (
    <div className="mb-10 md:mb-0 mx-auto lg:w-3/4 xl:w-2/4">
      <div className="bg-white px-5 py-10 rounded-md shadow-md m-auto">
        <Formik
          initialValues={{
            nombre: cliente?.nombre ?? "",
            edad: cliente?.edad ?? "",
            sexo: cliente?.sexo ?? "",
            email: cliente?.email ?? "",
            telefono: cliente?.telefono ?? "",
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
                <label className="text-gray-800 mb-2" htmlFor="edad">
                  Edad:
                </label>
                <Field
                  type="text"
                  name="edad"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingresa la edad del cliente"
                />
                {errors.edad && touched.edad ? (
                  <Alert>{errors.edad}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800 mb-2" htmlFor="sexo">
                  Sexo:
                </label>
                <Field
                  type="text"
                  name="sexo"
                  className="block w-full p-3 bg-gray-50 outline-none"
                  placeholder="Ingrese el sexo del cliente"
                />
                {errors.sexo && touched.sexo ? (
                  <Alert>{errors.sexo}</Alert>
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
                value={`${cliente.id ? "Edit client" : "Add client"}`}
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
