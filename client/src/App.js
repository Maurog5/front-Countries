import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import Welcome from './components/landing page/Welcome';
import AddActivity from './components/AddActivity 05-17-21-135/AddActivity';
import CountryDetail from './components/CountryDetail/CountryDetail';
//import CountryInfo from './components/CountryInfo/CountryInfo';

function App() {
  return (
    <>
      <div className="header1">
        <div className='container1'> 
        </div>
      </div>

      <div className="container">
        <Routes>
             <Route  path="/countries/:id" element={<CountryDetail />} />

             <Route path="/countries" element={<AllCountries />} />

             <Route path="/activities" element={<AddActivity />} />

             <Route exact path="/" element={<Welcome />} />
          

        </Routes>
      </div>
    </>
  );
}

export default App;