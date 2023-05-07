import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddActivity = () => {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
// esto para actuzlizar el estado de activity cuando el usuario ingresa información en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };
//manejo de el envío de un formulario.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/activities", activity);
      alert(res.data); // muestra la actividad creada en la consola
    } catch (error) {
      ;
    }
  };
  

  return (
    
    <div className="AGREGAR-ACTIVITY">
    <h1 class="title">Actividades por latam 🧉</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">  ➤Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Ingrese su actividad.." onChange={handleInputChange}  value={activity.name}  autoComplete="off" />
        </div>
        <div>
          <label htmlFor="difficulty">➤Dificultad:</label>
          <select id="difficulty" name="difficulty" onChange={handleInputChange} value={activity.difficulty}>
            <option value="">Selecciona una dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration">➤Duración:</label>

          <select type="number" id="duration" name="duration" onChange={handleInputChange} value={activity.duration} >
          <option value="">Selecciona una opción</option>
            <option value="1">1hs</option>
            <option value="2">2hs</option>
            <option value="3">3hs</option>
            <option value="4">4hs</option>
            <option value="5">5hs</option>
           
            <option value="6">6hs</option>
            <option value="7">7hs</option>
            <option value="8">8hs</option>
            <option value="9">9hs</option>
            <option value="10">10hs</option>
      
            <option value="11">11hs</option>
            <option value="12">12hs</option>
            <option value="13">13hs</option>
            <option value="14">14hs</option>
            <option value="15">15hs</option>
          
            <option value="16">16hs</option>
            <option value="17">17hs</option>
            <option value="18">18hs</option>
            <option value="19">19hs</option>
            <option value="20">20hs</option>
          
            <option value="21">21hs</option>
            <option value="22">22hs</option>
            <option value="23">23hs</option>
            <option value="24">24hs</option>
          
            

          </select>
        </div>
        <div>
          <label htmlFor="season">➤Temporada:</label>
          <select id="season" name="season" onChange={handleInputChange} value={activity.season}>
            <option value="">Seleccione una temporada</option>
            <option value="Summer">Verano</option>
            <option value="Autumn">Otoño</option>
            <option value="Spring">Primavera</option>
            <option value="Winter">Invierno</option>
            <option value="All the year">Todo el año</option>
          </select>
        </div>
        <div>
        <label htmlFor="pais">➤Seleccione un pais :</label>
          <select id="pais" name="pais" onChange={handleInputChange} value={activity.pais}>
            <option value="">Seleccione un pais </option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Venezuela">Venezuela</option>
                      <option value="Costa Rica">Costa Rica</option>
            <option value="Cuba">Cuba</option>
            <option value="Ecuador">Ecuador</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="México">México</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panamá">Panamá</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Perú">Perú</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Uruguay">Uruguay</option>
                    </select>
        </div>
        <button type="submit">Agregar actividad</button>
      <Link to="/countries">





  <button>Back</button>
</Link>
      </form>
    </div>
  );
};

export default AddActivity;

