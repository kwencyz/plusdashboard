// MainMenu.js
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MainMenu = () => {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            // Reverse geocode to get location name
            let geocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            setLocationName(geocode[0].city);
        };

        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, { marginTop: 30 }]}>
                {currentLocation ? (
                    <>
                        <Text style={styles.locationText}>{locationName}</Text>
                        <View style={styles.separator} />
                    </>
                ) : (
                    <Text>Loading location...</Text>
                )}
            </View>
            {currentLocation ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                        }}
                        title="You are here"
                        description="This is your current location"
                    />
                </MapView>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    topContainer: {
        position: 'absolute',
        top: 30,
        left: 30,
        right: 30,
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1,
    },
    locationText: {
        marginLeft: 30,
        fontSize: 16,
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default MainMenu;
