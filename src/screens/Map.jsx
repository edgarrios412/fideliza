import { Text } from "react-native"
import tw from "twrnc"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from "./mapStyle";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const Map = () => {

    const [location, setLocation] = useState({
        latitude:5.0215614,
        longitude:-73.9920667
    });

    useEffect(() => {
        // Función para obtener la ubicación actual
        const getLocation = async () => {
            try {
                // Solicitar permisos de ubicación si aún no se han otorgado
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.error('Permiso de ubicación no otorgado');
                    return;
                }

                // Obtener la ubicación actual
                const location = await Location.getCurrentPositionAsync({});
                setLocation(location.coords);
            } catch (error) {
                console.error('Error al obtener la ubicación:', error);
            }
        };

        // Llamar a la función de obtención al cargar el componente
        getLocation();
    }, []);

    return (
        <>
            <MapView
                customMapStyle={mapStyle}
                initialRegion={{
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                provider={PROVIDER_GOOGLE}
                style={tw`h-full w-full`}>
                <Marker
                    coordinate={{
                        latitude: 5.031827549639227, 
                        longitude: -73.99492566470295
                    }}
                    title="Casa Azteca Express"
                    description="Utiliza Fidelidapp"
                />
                <Marker
                    coordinate={{
                        latitude: 5.032305814565343, 
                        longitude: -73.9942980278316
                    }}
                    title="Tiendas Ara"
                    description="Utiliza Fidelidapp"
                />
            </MapView>
        </>
    )
}

export default Map