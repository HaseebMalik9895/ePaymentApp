// import {
//   View,
//   Image,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import React, {useState} from 'react';
// import MapView, {Marker} from 'react-native-maps';
// import {useEffect} from 'react';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import { View, Image, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, PermissionsAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation'; // Import Geolocation module


const catagory = [
  {
    id: 0,
    name: 'All',
    title: '',
  },
  {
    id: 1,
    name: 'Ice Cream',
    title: '',
  },
  {
    id: 2,
    name: 'Drinks',
    title: '',
  },
  {
    id: 3,
    name: 'Backery',
    title: '',
  },
  {
    id: 4,
    name: 'Juices',
    title: '',
  },
  {
    id: 5,
    name: 'Cakes',
    title: '',
  },
  {
    id: 6,
    name: 'Sweets',
    title: '',
  },
  {
    id: 7,
    name: 'Fast Food',
    title: '',
  },
];
const Food = [
  {
    id: 0,
    name: 'KFC',
    name1: 'Fast Food',
    image: require('../../../assets/images/KFC.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
  {
    id: 1,
    name: 'Burger King',
    name1: 'Fast Food',
    image: require('../../../assets/images/Burgerking.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
  {
    id: 2,
    name: 'Pizza Hut',
    name1: 'Ice Cream',
    image: require('../../../assets/images/Pizzahut.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
  {
    id: 3,
    name: 'KFC',
    name1: 'Ice Cream',
    image: require('../../../assets/images/KFC.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
  {
    id: 4,
    name: 'Burger King',
    name1: 'Drinks',
    image: require('../../../assets/images/Burgerking.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
  {
    id: 5,
    name: 'Pizza Hut',
    name1: 'Drinks',
    image: require('../../../assets/images/Pizzahut.png'),
    image1: require('../../../assets/images/star.png'),
    text: '4.9  (89) 0.2 km',
  },
];

const Merchant = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [manu, setManu] = useState();
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 30.375321,
    longitude: 69.345116,
  });
  
  const handlePlaceSelect = (data, details) => {
    console.log('Selected Place Details:', details);

    // Check if 'geometry' and 'location' are present before accessing 'lat' and 'lng'
    if (details.geometry && details.geometry.location) {
      const {lat, lng} = details.geometry.location;
      console.log('Selected Place Coordinates:', lat, lng);
    } else {
      console.error('Invalid or missing location information in the response.');
    }
  };

  useEffect(() => {
    if (selectedCategory === 'All') {
      const filteredFood = Food;
      setManu(filteredFood);
    } else {
      const filter = Food.filter(item => item.name1 === selectedCategory);
      setManu(filter);
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    // Request location permission
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Get current location
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setMarkerPosition({ latitude, longitude });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
  
    // Call the function to request location permission
    
  }, []);
  

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: '40%',
          width: '100%',
        }}>
        <MapView 
          onPress={e => {
            // Update the marker position when the map is pressed
            setMarkerPosition(requestLocationPermission()
              // latitude: e.nativeEvent.coordinate.latitude,
              // longitude: e.nativeEvent.coordinate.longitude,
            );
          }}
          style={{flex: 1}}
          initialRegion={{
            latitude: markerPosition.latitude,
            longitude: markerPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={markerPosition}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setMarkerPosition({
              latitude: details?.geometry?.location.lat,
              longitude: details?.geometry?.location.lng,
            });
          }}
          GooglePlacesDetailsQuery={{
            fields: 'geometry',
          }}
          listViewDisplayed={true}
          query={{
            key: 'AIzaSyDbfbWiIvjK79U_aI8urPCbcxcMWEVirW4',
            language: 'en',
          }}
          styles={{
            container: {
              position: 'absolute',
              top: 10,
              width: '100%',
            },
            textInputContainer: {
              flex: 1,
              backgroundColor: 'transparent',
              height: 54,
              marginHorizontal: 20,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              height: 54,
              margin: 0,
              borderRadius: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: {x: 0, y: 0},
              shadowRadius: 15,
              borderWidth: 1,
              borderColor: '#ddd',
              fontSize: 18,
              borderRadius: 10,
            },
            listView: {
              borderWidth: 1,
              borderColor: '#ddd',
              backgroundColor: '#fff',
              marginHorizontal: 20,
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: {x: 0, y: 0},
              shadowRadius: 15,
              marginTop: 10,
            },
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '7%',
          backgroundColor: '#ffff',
          borderBottomColor: '#B6C4B6',
          borderBottomWidth: 0.5,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={catagory}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item.name)}
                style={{
                  marginVertical: 10,
                  elevation: 0.3,
                  height: 35,
                  width: 90,
                  backgroundColor:
                    item.name === selectedCategory ? '#F54D4D' : 'white',
                  marginHorizontal: 10,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.3,
                  overflow: 'hidden',
                  borderColor:
                    item.name === selectedCategory ? '#F54D4D' : 'white',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: item.name === selectedCategory ? 'white' : 'grey',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          height: '53%',
          backgroundColor: '#ffffff',
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={manu}
          style={{paddingHorizontal: 10}}
          renderItem={({item}) => {
            return (
              <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={item.image}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <View>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.subtitle}>{item.name1}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                      <Image
                        source={item.image1}
                        resizeMode="contain"
                        style={styles.icon}
                      />
                      <Text style={styles.text}>{item.text}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.promoButton}>
                        <Text style={styles.buttonText}>Promo 1</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.promoButton2}>
                        <Text style={styles.buttonText}>Promo 2</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Merchant;

const styles = StyleSheet.create({
  cardContainer: {
    // elevation: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // overflow: 'hidden',
  },
  card: {
    elevation: 5,
    height: 120,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
    padding: 3,
    backgroundColor: '#ffffff',
    shadowRadius: 15,
    shadowColor: '#B6C4B6',
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
    borderRightColor: '#B6C4B6',
    borderLeftColor: '#B6C4B6',
  },
  imageContainer: {
    width: '30%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  detailsContainer: {
    width: '70%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    height: 13,
    width: 13,
    marginRight: 5,
  },
  text: {
    color: 'black',
  },
  buttonContainer: {
    width: '70%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  promoButton: {
    height: 30,
    width: '45%',
    backgroundColor: '#F54D4D',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoButton2: {
    height: 30,
    width: '45%',
    backgroundColor: '#FAAF18',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
});





// // React Native Geolocation
// // https://aboutreact.com/react-native-geolocation/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Button,
// } from 'react-native';

// //import all the components we are going to use.
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [
//     currentLongitude,
//     setCurrentLongitude
//   ] = useState('...');
//   const [
//     currentLatitude,
//     setCurrentLatitude
//   ] = useState('...');
//   const [
//     locationStatus,
//     setLocationStatus
//   ] = useState('');

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'ios') {
//         getOneTimeLocation();
//         subscribeLocationLocation();
//       } else {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//               title: 'Location Access Required',
//               message: 'This App needs to Access your location',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //To Check, If Permission is granted
//             getOneTimeLocation();
//             subscribeLocationLocation();
//           } else {
//             setLocationStatus('Permission Denied');
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       }
//     };
//     requestLocationPermission();
//     return () => {
//       Geolocation.clearWatch(watchID);
//     };
//   }, []);

//   const getOneTimeLocation = () => {
//     setLocationStatus('Getting Location ...');
//     Geolocation.getCurrentPosition(
//       //Will give you the current location
//       (position) => {
//         setLocationStatus('You are Here');

//         //getting the Longitude from the location json
//         const currentLongitude = 
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);
        
//         //Setting Longitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         timeout: 30000,
//         maximumAge: 1000
//       },
//     );
//   };

//   const subscribeLocationLocation = () => {
//     watchID = Geolocation.watchPosition(
//       (position) => {
//         //Will give you the location on location change
        
//         setLocationStatus('You are Here');
//         console.log(position);

//         //getting the Longitude from the location json        
//         const currentLongitude =
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);

//         //Setting Latitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         maximumAge: 1000
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
//             }}
//             style={{width: 100, height: 100}}
//           />
//           <Text style={styles.boldText}>
//             {locationStatus}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Longitude: {currentLongitude}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Latitude: {currentLatitude}
//           </Text>
//           <View style={{marginTop: 20}}>
//             <Button
//               title="Refresh"
//               onPress={getOneTimeLocation}
//             />
//           </View>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           React Native Geolocation
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//     textAlign: 'center'
//   },
// });

// export default App;