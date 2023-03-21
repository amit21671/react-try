import React, { useState} from 'react';
import './App.css';
import Header from './Header';
import PropertiesMap from './pages/PropertiesMap';
import PlainTextFooter from './PlainTextFooter';
import Sidebar from './Sidebar';
const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('United States'); // state for the selected region
  const [data, setData] = useState({ lati: '38.8951100', longi: '-77.0363700' })
  const countryPosition = {
    "India": [28.6519500, 77.2314900],
    "United States": [38.8951100, -77.0363700],
    "United Kingdom": [51.5085300, -0.1257400]
  }
  const handleRegionChange = (event) => {
    console.log(event.target.value)
    setSelectedRegion(event.target.value);
    for (let i in countryPosition) {
        //console.log(i,countryPosition[i])
      if (i === event.target.value) {
        //console.log(countryPosition[i][0],countryPosition[i][1])
        setData({ lati: countryPosition[i][0], longi: countryPosition[i][1] });
      }
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submit logic here
  };
  const getRegionInfo = (region) => {
    // dummy function that returns region info based on region name
    switch (region) {
      case 'United States':
        return 'Currency Symbol: US$ Units of Speed: Miles per hour (mph) Distance: Miles Volume: US Gallons Timezone(s): Eastern Standard Time (EST), Central Standard Time (CST), Mountain Standard Time (MST), Pacific Standard Time (PST)';
      case 'India':
        return 'Currency Symbol: INR Units of Speed: km/h Units of Distance: kilometers Units of Volume: liters Timezone: India Standard Time (IST)';
      case 'United Kingdom':
        return 'Currency Symbol: £ Units of Speed: Miles per hour (mph) Units of Distance: Kilometers (km) Units of Volume: Liters (L) Timezone: Greenwich Mean Time (GMT)';
      default:
        return '';
    }
  };
  console.log("data-->", data)
  return (
    <>
     <div className="App">
       <Header></Header>
      <Sidebar></Sidebar>
       <PlainTextFooter></PlainTextFooter>
       <PropertiesMap data={data}/>
     </div>
    <div className="floating-controls">
      <form onSubmit={handleFormSubmit}>
        <select  value={selectedRegion} onChange={handleRegionChange}>
          <option value="United States">United States</option>
          <option value="India">India</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </form>
      <div className="region-info">
        <h3>{selectedRegion}</h3>
        <p>{getRegionInfo(selectedRegion)}</p>
      </div>
    </div>
    </>
  );
};
export default App;

