import './Search.scss';
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSearch = (data) => {
    const searchTerm = data.searchTerm.trim();
    if (searchTerm) {
      navigate(`/busqueda/${searchTerm}`); // Navega a la ruta deseada
    }
  };

  return (
    <div  className='search-content'>
        <form onSubmit={handleSubmit(handleSearch)}>
            <input type="text" placeholder='Buscar' {...register("searchTerm")}/>
            <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    </div>
  );
}
