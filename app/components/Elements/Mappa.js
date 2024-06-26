"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function MyMap() {
    const mapRef = React.useRef(null);

    useEffect(() => {
        prepareMap();
    }, []);

    const prepareMap = () => {
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
        });
        loader.importLibrary("maps").then((res) => {
            const { Map } = res;
            const position = { lat: 44.69825, lng: 10.63125 };
            const mapOptions = {
                center: position,
                zoom: 16,
                mapId: "YOUR_MAP_ID",
            };
            const map = new Map(mapRef.current, mapOptions);

            loader.importLibrary("marker").then((res) => {
                const { Marker } = res;
                const marker = new Marker({ position, map });
            });
        });
    };

    return (
        <div
            style={{
                width: "90vw",
                height: "400px",
                borderRadius: "10px",
                backgroundColor: "black",
                marginTop: "3vh",
            }}
            ref={mapRef}
        >
            <h1>Caricamento mappa...</h1>
        </div>
    );
}
