import React, { useState, useEffect } from 'react'
import {ChevronRightIcon } from '@heroicons/react/20/solid'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ResultsContainer from './ResultsContainer';


const ipAddresTracker = {
    ipAddress: "8.8.8.8",
    location: "California",
    city: "Mountain View",
    cp: "94035",
    timezone: "-07:00",
    isp: "Google LLC",
}


export default function Principal() {

    const [ip, setIp] = useState("")
    const [ipData, setIpData] = useState(ipAddresTracker)
    
    const [position, setPosition] = useState([37.38605, -122.08385]);


    const handleChange = event => {
        setIp(event.target.value)
    }

    function FlyMapTo() {

        const map = useMap()
    
        useEffect(() => {
            map.setView(position)
        }, [position])
    
        return null
    }
    

    const handleSubmit = e => {
        e.preventDefault();
        
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_qJOatF00NclCcOgJIG3O2IM9pn4g8&ipAddress=${ip}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setIpData(
                    {
                        ipAddress: data.ip,
                        location: data.location.region,
                        city: data.location.city,
                        cp:data.location.postaleCode,
                        timezone: data.location.timezone,
                        isp: data.as.name,
                    }
            )
            setPosition([data.location.lat, data.location.lng])
        })
        setIp("")
    }

    return (
        <div className='flex justify-center flex-col '>
            <div id='background' className='pt-10'> 
                <h1 className='mb-5'>IP Address Tracker</h1>
                <div className='flex justify-center'>
                    <div className='h-12 mt-5 w-80 relative shadow-sm'>
                        <form onSubmit={handleSubmit} className=""> 
                            <input 
                                value={ip}
                                onChange={handleChange}
                                type="text"
                                name="search"
                                id="search"
                                placeholder='Search for any address or domain'
                                className="bg-white h-12 p-5 w-full rounded-lg border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
                                required
                            />
                            <button type="submit"  className="bg-black rounded-r-lg border-black absolute inset-y-0 right-0 flex items-center pr-3">
                                <ChevronRightIcon className=" text-slate-200 h-5 w-5" aria-hidden="true" />
                            </button>
                        </form>  
                    </div> 
                </div>
            </div>
            <ResultsContainer 
                    ip={ipData.ipAddress} 
                    region={ipData.location} 
                    city={ipData.city} 
                    cp={ipData.cp} 
                    timezone={ipData.timezone} 
                    isp={ipData.isp}
            />
            <div className='w-full z-0  bg-white  touch-pan-y ' >
                <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                radius={200}
                style={{ height: "700px", width: "100vw" }}
                >
                <FlyMapTo center={position} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    zIndex={10}
                />
                <Marker position={position} >
                    <Popup icon={"../assets/marker-icon-2x.png"}>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
    )
}





