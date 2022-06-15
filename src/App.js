

import React, {useEffect, useState} from 'react';
import './App.css';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats'
import Search from './components/search';

function App() {


  const [globalStats, setglobalStats] = useState('')
  const [countriesStats, setCountriesStats] = useState([]);

  useEffect(()=>{
    
      let url = "https://api.covid19api.com/summary";
      fetch(url).then((Response) => Response.json().then((data)=>{
      console.log(data);
      setglobalStats(data.Global)
      setCountriesStats(data.Countries);
      }))


  } , [])

  const searchCountry = ((text)=>{

    let value = text.toLowerCase();

    let result = [];

    result = countriesStats.filter((countries)=>{

      return countries.Country.toLowerCase().indexOf(value) !== -1
    });
    setCountriesStats(result);

  })
  
  return (
    <div className="App">
        <GlobalStats  global = {globalStats}/>
        <Search search = {searchCountry}/>
        <CountriesStats countries = {countriesStats}/>
    </div>
  );
}

export default App;
