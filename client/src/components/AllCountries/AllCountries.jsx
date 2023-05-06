import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FilterCountry from "../FilterCountry/FilterCountry";
import Pagination from "../Paginado/Pagination";


const AllCountries = () => {
  //los datos de mis paises
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //-------------------------------------------------------------
  //SelectBuscador es mi estado que utilizo para guardar los valores de busqueda que va a hacer el usuario, lo mismo para SelectRegion
  const [SelecterBuscador, setSelecterBuscador] = useState("");
  const [SelectRegion, setSelectRegion] = useState("");

  //-------------------------------------------------------------------
//Aca defino el estado que utilizo para guardar la pagina actual de la paginacion
//y en perPage guardo la cantidad de paises que quiero que se muestren en la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  const filteredCountries =
    SelectRegion === "" ? countries : countries.filter((country) => country.region === SelectRegion);

  const handleRegionChange = (regionName) => {
    setSelectRegion(regionName);
    setCurrentPage(1);
    //con este setCurrentPage me aseguro que el la paginacion comience en la primer pagina despues del filtro de region
  };


  const arrayfiltradoBandera
   = countries === "" 
   ? countries 
   : countries.filter((a) => a.name.toLowerCase().startsWith(SelecterBuscador.toLowerCase()));

//aca viene el filtro para que filtre del array anterior  nombre y region seleccionado
  const filteredByNameAndRegion = arrayfiltradoBandera.filter((country) => filteredCountries.includes(country));

  const getAllCountries = async () => {
    try {
      const res = await axios.get("http://localhost:3001/countries");
      if (res.status !== 200) throw new Error("algo salio mal");

      const data = res.data;
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
//manejo los cambios en el valor del input del buscador y reinicia el paginado.
  const handlerBuscadorChange = (e) => {
    setSelecterBuscador(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  // Aca obtengo los paises actuales
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredByNameAndRegion.slice(indexOfFirstCountry, indexOfLastCountry);

  // manejo del evento para cambiar pagina
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
return (
    <div className="all__Country__wrapper">
        <div className="country__top">
            <div className="search-input-container">
                <Link to="/" className="home">
                    <button>
                        <p> -=Home=-</p>
                    </button>

                </Link>
                <div className="Activity">    
                <Link to="/activities">
             <button>Crea tu actividad</button>
             </Link>
             </div>
            </div>
            <div className="search">
                <input placeholder="Escribe aqui el pais🌍" type="search" onChange={handlerBuscadorChange} />
            </div>
            <div className="filter">
                <FilterCountry onSelect={handleRegionChange} />
            </div>
        </div>
        <div className="country__bottom">
            {isLoading && !error && <h4>Loading.........</h4>}
            {error && !isLoading && <h4>{error}</h4>}

            {currentCountries?.map((country, index) => (
    <Link to={`/countries/${country.name}`} key={index} className="country__card">
        <div className="country__img">
            <img src={country.flag} alt="png" />
        </div>
        <div className="country__data">
            <h3>{country.name}</h3>
            <h6 >Population: {country.population}</h6>
            <h6>Region: {country.region}</h6>
            <h6>Capital: {country.capital}</h6>
        </div>
    </Link>
))}
            {filteredByNameAndRegion.length > 10 && (
                <Pagination
                    data={filteredByNameAndRegion}
                    itemsPerPage={countriesPerPage}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    </div>
);
            }

export default AllCountries;
