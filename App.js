import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [localitzacioActual, setLocalitzacioActual] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  //const origin = {latitude: -15.4788833,longitude: -70.1172968};
  //const destination = {latitude: -15.469410, longitude: -70.1101100};

  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocalitzacioActual(JSON.stringify(location));
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0121,
      });

      console.log(mapRegion);
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <MapView style={styles.map} initialRegion={mapRegion} showsUserLocation/> 
    /**
     * 
     * <MapViewDirections
      origin={origin}
      destination={destination}
      strokeColor="black"
      apikey={''}
      />  
      </MapView>
     */
  );
}
const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
