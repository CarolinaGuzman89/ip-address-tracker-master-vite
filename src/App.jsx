
import './App.css'
import Form from './Components/Form'
import Map from './Components/Map'

function App() {

  return (
    <div className="App">
      <div id="searchInput" className='pt-10'>
        <h1>IP Address Tracker</h1>
        <Form />
      </div>
      <Map />
    </div>
  )
}

export default App
