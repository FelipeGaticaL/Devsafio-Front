/* import { UpdateButton, DeleteButton } from './Buttons/Buttons'; */
import { AddDatabase } from './Modals/AddElement';
import { EditDatabase } from './Modals/EditElement';
import { DeleteDatabase } from './Modals/DeleteElement';
import { useEffect, useState, useCallback } from 'react';
import apiClient from '../../services/api.service';

const DatabaseTable = () => {
  const [database, setDatabase] = useState(null);

  /* Para que los elementos sean iterables, es necesario extraer el arreglo recorrido del objeto */
  /* Esto nos ayuda para crear, actualizar y eliminar */
  const getAllDatabase = useCallback(async () => {
    const data = await apiClient('admin/get-database');
    setDatabase(data.data);
  }, []);

  useEffect(() => {
    getAllDatabase();
  }, []);

  const updateDatabase = (values, id) => {
    setDatabase(prevState =>
      prevState.map(e => (e.id === id ? { ...e, ...values } : e))
    );
  };
  const removeDatabase = id => {
    setDatabase(prevState => prevState.filter(element => element.id !== id));
  };


  return (
    <div className="container mx-auto p-12 md:max-w-3xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4 col-start-1 col-end-6">
          Bases de datos y Frameworks
        </h1>
        <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
          <AddDatabase setDatabase={setDatabase} data={database}></AddDatabase>
        </div>
      </div>
      <table className="flex flex-col w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr className="flex flex-row">
            <th scope="col" className="px-6 py-3 ">
              ID
            </th>
            <th className="px-6 py-3 flex-auto">Nombre</th>
            <th className="flex items-center mr-5">Editar</th>
            <th className="flex items-center mr-5">Eliminar</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll" style={{ maxHeight: '80vh' }}>
          {database !== null
            ? database.map((e, i) => (
                <tr
                  className="flex items-center border-b bg-gray-800 border-gray-700"
                  key={e.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    {e.id}
                  </th>
                  <td className="grow sm:px-6 sm:py-4 text-white">{e.name}</td>
                  <td>
                    <EditDatabase updateDatabase={updateDatabase} data={e} id={e.id} />
                  </td>
                  <td>
                    <DeleteDatabase removeDatabase={removeDatabase} data={e} />
                  </td>
                </tr>
              ))
            : false}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseTable;
