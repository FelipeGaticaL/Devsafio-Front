import React, { useState } from 'react';
import '../../../assets/componentsCSS/button.css';
/* import apiClient from '../../services/api.service'; */
import Swal from 'sweetalert2';
import { Form, Formik } from 'formik';
import * as FormField from '../../Forms';
import { FaWindowClose } from 'react-icons/fa';
import apiClient from '../../../services/api.service';

const EditDatabase = ({ updateDatabase, data, id }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        href="#"
        className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#89CFD9] text-[#232323]"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar Base de Datos o Framework
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  >
                    {' '}
                    <FaWindowClose />
                  </button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: data.name || ''
                    }}
                    onSubmit={async (values) => {
                      try {
                        values['id'] = id;
                        await apiClient.put('/admin/update-database', values);
                        return Swal.fire({
                          title: '¡Datos modificados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => {
                          setShowModal(false);
                          updateDatabase(values, id);
                        });
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="mt-2">
                        <FormField.InputField
                          
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Database o Framework"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-4 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Editar
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
const EditTools = ({ updateTools, data, id }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        href="#"
        className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#89CFD9] text-[#232323]"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar Base de Datos o Framework
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  >
                    {' '}
                    <FaWindowClose />
                  </button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: data.name || ''
                    }}
                    onSubmit={async (values) => {
                      try {
                        values['id'] = id;
                        await apiClient.put('/admin/update-tool', values);
                        return Swal.fire({
                          title: '¡Datos modificados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => {
                          setShowModal(false);
                          updateTools(values, id);
                        });
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="mt-2">
                        <FormField.InputField
                          
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Herramienta"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-4 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Editar
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
const EditDevlanguage = ({ updateDevlanguage, data, id }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        href="#"
        className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#89CFD9] text-[#232323]"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar Lenguaje
                  </h3>
                  <button
                    className="text-3xl ml-2 text-rose-500"
                    onClick={() => setShowModal(false)}
                  >
                    {' '}
                    <FaWindowClose />
                  </button>
                </div>
                <div className="flex justify-center border-t border-solid border-slate-200 rounded-b">
                  <Formik
                    initialValues={{
                      name: data.name || ''
                    }}
                    onSubmit={async (values) => {
                      try {
                        values['id'] = id;
                        await apiClient.put('/admin/update-devlenguage', values);
                        return Swal.fire({
                          title: '¡Datos modificados!',
                          confirmButtonText: 'Cerrar',
                          confirmButtonColor: '#2738F5'
                        }).then(() => {
                          setShowModal(false);
                          updateDevlanguage(values, id);
                        });
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form className="mt-2">
                        <FormField.InputField
                          
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Lenguaje"
                          touched={touched}
                          errors={errors}
                        />
                        <div className="flex py-4 justify-center">
                          <button className="btn btn-blue" type="submit">
                            Editar
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

export { EditDatabase, EditTools, EditDevlanguage };
