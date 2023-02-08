import { UpdateButton, DeleteButton } from './Buttons/Buttons';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';
import { AddDevlanguage } from './Modals/AddElement';
import { EditDevlanguage} from './Modals/EditElement';
import { DeleteDevlanguage } from './Modals/DeleteElement';

const DevlangagueTable = () => {
  const [devlenguages, setDevlanguage] = useState(null);
  const getAllDevlanguage = async () => {
    const data = await apiClient('admin/get-devlenguages');
    setDevlanguage(data.data);
  };
  useEffect(() => {
    getAllDevlanguage();
  }, []);

  const updateDevlanguage = (values, id) => {
    setDevlanguage(prevState =>
      prevState.map(e => (e.id === id ? { ...e, ...values } : e))
    );
  };
  const removeDevlanguage = id => {
    setDevlanguage(prevState => prevState.filter(element => element.id !== id));
  };

  return (
    <div className="container mx-auto p-12 md:max-w-3xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4 col-start-1 col-end-6">
          Lenguajes
        </h1>
        <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
        <AddDevlanguage setDevlanguage={setDevlanguage} data={devlenguages}></AddDevlanguage>
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
          {devlenguages !== null
            ? devlenguages.map((e) => (
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
                  <EditDevlanguage updateDevlanguage={updateDevlanguage} data={e} id={e.id} />
                  </td>
                  <td>
                  <DeleteDevlanguage removeDevlanguage={removeDevlanguage} data={e} />
                  </td>
                </tr>
              ))
            : false}
        </tbody>
      </table>
    </div>
  );
};

export default DevlangagueTable;
