'use client'

import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { MapContainer, TileLayer } from 'react-leaflet'

function Map(){
    return(
        <MapContainer center={[44.706323, 10.609102]} zoom={13} scrollWheelZoom={true}>
             <TileLayer
            attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
             url= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            /> 

        </MapContainer>
    )

}

export default Map;
