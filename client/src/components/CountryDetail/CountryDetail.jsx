import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [activities, setActivities] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryRes = await axios.get(`http://localhost:3001/countries/${id}`);
        setCountry(countryRes.data);

        const activitiesRes = await axios.get(`http://localhost:3001/countries/${id}/activities`);
        setActivities(activitiesRes.data.map(activity => {
          return {
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season
          }
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!country) return <div>Loading...</div>;

  let activitiesList = [];

activities.forEach((activity, index) => {
  activitiesList.push(
    <div key={index}>
      <h4>{activity.name}</h4>
      <p>Dificultad: {activity.difficulty}</p>
      <p>Duración: {activity.duration}</p>
      <p>Temporada: {activity.season}</p>
      <br />
    </div>
  );
});

  return (
    <div className='detalles'>
      <h2>{country[0]?.name}</h2>
      <img src={country[0]?.flag} alt={`${country[0]?.name} flag`} />
      <p>Capital: {country[0]?.capital}</p>
      <p>Subregion: {country[0]?.subregion}</p>
      <h3>Actividades:</h3>
      <ul>
        {activitiesList}
      </ul>
      <Link to='/countries'>
        <button>Ver todos los países</button>
      </Link>
    </div>
  );
};

export default CountryDetail;
