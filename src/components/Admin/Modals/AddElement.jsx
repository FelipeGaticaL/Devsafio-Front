import React, { useState } from 'react';
import '../../../assets/componentsCSS/button.css';
/* import apiClient from '../../services/api.service'; */
import Swal from 'sweetalert2';
import { Form, Formik } from 'formik';
import * as FormField from '../../Forms';
import { FaWindowClose } from 'react-icons/fa';
import apiClient from '../../../services/api.service';

const AddDatabase = ({ setDatabase, data}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn bg-[#89CFD9] text-[#232323] border-white inline-flex items-center font-light  sm:btn-md btn-md"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="hidden sm:block">Agregar</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar Base de Datos o Framework
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  > <FaWindowClose/></button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: ''
                    }}
                    onSubmit={async (values) => {
     
                      try {
                        const dataPost = await apiClient.post('/admin/create-database', values);
                        setDatabase([...data, dataPost.data]);
                        return Swal.fire({
                          title: '¡Datos Guardados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => setShowModal(false));
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <FormField.InputField
                          label="Nombre Database o Framework"
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Database o Framework"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-8 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Guardar Cambios
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
const AddTools = ({ setTools, data}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn bg-[#89CFD9] text-[#232323] border-white inline-flex items-center font-light  sm:btn-md btn-md"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="hidden sm:block">Agregar</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar Herramienta
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  > <FaWindowClose/></button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: ''
                    }}
                    onSubmit={async (values) => {
     
                      try {
                        const dataPost = await apiClient.post('/admin/create-tool', values);
                        setTools([...data, dataPost.data]);
                        return Swal.fire({
                          title: '¡Datos Guardados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => setShowModal(false));
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <FormField.InputField
                          label="Nombre de la Herramienta"
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Herramienta"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-8 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Guardar Cambios
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
const AddDevlanguage = ({ setDevlanguage, data}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn bg-[#89CFD9] text-[#232323] border-white inline-flex items-center font-light  sm:btn-md btn-md"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="hidden sm:block">Agregar</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar Lenguajes de Programación
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  > <FaWindowClose/></button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: ''
                    }}
                    onSubmit={async (values) => {
     
                      try {
                        const dataPost = await apiClient.post('/admin/create-devlenguage', values);
                        setDevlanguage([...data, dataPost.data]);
                        return Swal.fire({
                          title: '¡Datos Guardados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => setShowModal(false));
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <FormField.InputField
                          label="Nombre del lenguaje"
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Lenguaje"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-8 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Guardar Cambios
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export { AddDatabase, AddTools, AddDevlanguage };
