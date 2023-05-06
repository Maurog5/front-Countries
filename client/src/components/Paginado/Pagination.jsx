import React, { useState,  } from "react";

const Pagination = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //calculo el numero total de paginas / elementos de la pagina 
  const totalPages = Math.ceil(data.length / itemsPerPage);

  //handerClick toma como argumento el numero de la pagina a la que se quiere ir
  //la funcion actualiza el estado de la pagina
  //y dispara el onpageChage con el numero actual de la pagina que es cuando el usuariio
  // hace click en un boton de pagina
  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
