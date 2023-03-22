
import './App.css'
import FormIp from './Components/FormIp'
import Map from './Components/Map'
import ResultsContainer from './Components/ResultsContainer';

import React from 'react'


function App() {

  return (
    
      <div className="App static">
        <div id="searchInput" className='pt-10'>
          <h1>IP Address Tracker</h1>
          <FormIp />
        </div>
        <ResultsContainer 
          ipSearc= {[
                {
                    id: "17.334.9845",
                    location: "Broolyn, NY, 10001",
                    timezone: "UTC -05:00",
                    isp: "SpaceX Starlink"
                }
            ]}
        />
        <Map
            position = {[51.505, -0.09]}
        />
      </div>
   
  )
}

export default App
