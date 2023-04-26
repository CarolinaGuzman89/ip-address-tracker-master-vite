import React, { useState, useEffect } from 'react'
import {ChevronRightIcon } from '@heroicons/react/20/solid'
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ResultsContainer from './ResultsContainer';





export default function Principal() {
    const [searchIp, setSearchIp] = useState({
        ip:"",
    });

    const [data, setData] = useState({
        ipAddress: "8.8.8.8",
        location: "California",
        city: "Mountain View",
        cp: "94035",
        timezone: "-07:00",
        isp: "Google LLC",
    })
    
    const [position, setPosition] = useState([37.38605, -122.08385]);

    const handleSubmit = e => {
        e.preventDefault();
        
    }
    
    const handleChange = event => {
        setSearchIp({
            ip: event.target.value
        })
    }

    function FlyMapTo() {

        const map = useMap()
    
        useEffect(() => {
            map.setView(position)
        }, [position])
    
        return null
    }
    
    const handleClick = (() =>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_qJOatF00NclCcOgJIG3O2IM9pn4g8&ipAddress=${searchIp.ip}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(
                
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

        setSearchIp({
            ip: "",
        })

        
        
    })

    return (
        <div className='grid grid-cols-1'>
            <div id='background' className='grid grid-rows-3 w-full pt-10 '> 
                <h1>IP Address Tracker</h1>
                <div className="w-full m-10 " >
                    <div className='w-1/3 h-12 inline-flex rounded-lg bg-white mb-10'>
                        <form onSubmit={handleSubmit} className='bg-white w-full flex rounded-lg '> 
                        <input 
                            value={searchIp.ip}
                            onChange={handleChange}
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Search for any address or domain'
                            className='bg-white text-sm  pl-5 w-5/6 rounded-lg cursor-pointer md:text-xs'
                            required
                        />
                        <button type="submit" onClick={handleClick} className='w-1/6 h-12 self-center bg-black rounded-r-lg cursor-pointer hover:bg-zinc-800'><ChevronRightIcon className=" text-slate-200 w-8" aria-hidden="true" /></button>
                        </form>
                        
                    </div>
                </div>
                <ResultsContainer 
                    ip={data.ipAddress} 
                    region={data.location} 
                    city={data.city} 
                    cp={data.cp} 
                    timezone={data.timezone} 
                    isp={data.isp}
                    />
            </div>
            <div className='w-full  bg-white overflow-auto touch-pan-y' >
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
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
    )
}





