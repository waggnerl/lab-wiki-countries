import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route
          path="/countries/:alpha3Code/:alpha2Code"
          element={<CountriesDetails />}
        />
      </Routes>
    </>
  );
}
export default App;
