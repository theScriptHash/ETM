import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function MapBox() {

const MapboxExample = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2YW5zaHNpbmdocGFyIiwiYSI6ImNsc2EzZGN3djBjcXUybm9qNGdkMXJkdzYifQ.lc15f7DBoyG300s6Vk192Q';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 14
        });

        map.addControl(new mapboxgl.NavigationControl());

        navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;

            map.setCenter([longitude, latitude]);

            const geocoderUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}';

            fetch(geocoderUrl)
                .then(response => response.json())
                .then(data => {
                    const address = data.features[0].place_name;
                    document.getElementById('address').innerText = 'Your address: ' + address;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });

        // Cleanup function to remove the map instance when the component unmounts
        return () => {
            map.remove();
        };
    }, []); // Empty dependency array to run the effect only once on component mount
  return (
    
       <div>
            <div id="map" style={{ width: '700px', height: '500px' }}></div>
            <p id="address"></p>
        </div>
    
  )
}
}
