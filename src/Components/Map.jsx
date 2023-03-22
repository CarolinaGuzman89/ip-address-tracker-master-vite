import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({position}) {
    
    return (
        <div className='w-full h-500 bg-white overflow-auto touch-pan-y' >
            <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "800px", width: "100vw" }}
            >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}
