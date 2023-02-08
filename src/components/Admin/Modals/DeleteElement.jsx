import React from 'react';
import '../../../assets/componentsCSS/button.css';
/* import apiClient from '../../services/api.service'; */
import Swal from 'sweetalert2';

import apiClient from '../../../services/api.service';


const DeleteDatabase = ({ removeDatabase, data}) => {
   async function deleteItem() {

    try {
      const result = await Swal.fire({
        title: '¿Esta seguro de eliminar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2738F5',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      });
      if (result.isConfirmed) {
        await apiClient.delete(`/admin/delete-database?id=${data.id}`);
        removeDatabase(data.id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Database o Framework eliminado',
          icon: 'success',
          confirmButtonColor: '#2738F5'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un problema al eliminar el registro',
        icon: 'error',
        confirmButtonColor: '#2738F5'
      });
    }
  }
  return (
    <button
    onClick={() => deleteItem()}
      href="#"
      className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#AC231B]"
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
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};
const DeleteTools = ({ removeTools, data}) => {
   async function deleteItem() {

    try {
      const result = await Swal.fire({
        title: '¿Esta seguro de eliminar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2738F5',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      });
      if (result.isConfirmed) {
        await apiClient.delete(`/admin/delete-tool?id=${data.id}`);
        removeTools(data.id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Herramienta eliminada',
          icon: 'success',
          confirmButtonColor: '#2738F5'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un problema al eliminar el registro',
        icon: 'error',
        confirmButtonColor: '#2738F5'
      });
    }
  }
  return (
    <button
    onClick={() => deleteItem()}
      href="#"
      className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#AC231B]"
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
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};
const DeleteDevlanguage = ({ removeDevlanguage, data}) => {
   async function deleteItem() {

    try {
      const result = await Swal.fire({
        title: '¿Esta seguro de eliminar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2738F5',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      });
      if (result.isConfirmed) {
        await apiClient.delete(`/admin/delete-devlenguage?id=${data.id}`);
        removeDevlanguage(data.id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'Lenguaje eliminado',
          icon: 'success',
          confirmButtonColor: '#2738F5'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un problema al eliminar el registro',
        icon: 'error',
        confirmButtonColor: '#2738F5'
      });
    }
  }
  return (
    <button
    onClick={() => deleteItem()}
      href="#"
      className="btn inline-flex items-center font-light mx-1 btn-sm lg:btn-md border-gray bg-[#AC231B]"
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
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
  );
};

export { DeleteDatabase, DeleteTools, DeleteDevlanguage};
